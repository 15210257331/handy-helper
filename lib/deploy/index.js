import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import DockerApp from './dockerApp.js'
import chalk from 'chalk'

// 定义配置文件的路径
const configFilePath = path.join(process.cwd(), 'deploy.config.json')
// 读取并解析配置文件
async function loadConfig() {
  try {
    // 判断配置文件是否存在
    if (!fs.existsSync(configFilePath)) {
      throw new Error('Configuration file not found')
    }
    const config = JSON.parse(fs.readFileSync(configFilePath, 'utf-8'))
    const { projectName, assets, environments } = config
    if (!environments || environments.length === 0) {
      throw new Error('请配置environments数组选项')
    }

    const { environment } = await inquirer.prompt([
      {
        type: 'list',
        message: '请选择部署环境',
        name: 'environment',
        choices: environments.map(item => {
          return {
            name: item.name + ': ' + item.host + ':' + item.port,
            value: item.name
          }
        })
      }
    ])
    const environmentConfig = environments.find(item => item.name === environment)

    const { username, password } = await inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: '请输入服务器用户名:'
      },
      {
        type: 'password',
        name: 'password',
        message: '服务器密码:',
        mask: '*'
      }
    ])

    if (environmentConfig.type === 'docker') {
      const dockerDeployConfig = {
        ...environmentConfig,
        username,
        password,
        projectName,
        assets
      }
      const app = new DockerApp(dockerDeployConfig)
      app.start()
    }
  } catch (error) {
    // 捕获并处理错误
    throw new Error('Error loading configuration:')
  }
}

loadConfig()
