import { exec, spawn } from 'child_process'
import { Client } from 'ssh2'
const ssh2Client = new Client()
import path from 'path'
import fs from 'fs'
import inquirer from 'inquirer'
import chalk from 'chalk'

export default class DockerApp {
  constructor(config) {
    this.config = config
  }

  async start() {
    console.log(chalk.green('开始部署'))
    try {
      // await this.executeCommand('tar -zcf assets.tar.gz ./*', '资源打包')
      await this.executeCommand(`tar -zcvf assets.tar.gz ${this.config.assets}`, '开始资源打包')
      await this.uploadProjectFile()
      await this.createImage()
      await this.removeFile('assets.tar.gz')
    } catch (err) {
      console.log(chalk.red(err))
      process.exit(1)
    }
  }

  /**
   * 执行shell 命令
   * 当执行出错时，并不会触发.on(error) 事件
   * 会触发 exit 事件 但是退出码 为非0
   *  */
  executeCommand(command, description) {
    return new Promise(function (resolve, reject) {
      const childProcess = exec(
        command,
        {
          maxBuffer: 500 * 1024 * 1024 /*stdout和stderr的最大长度*/
        },
        (error, stdout, stderr) => {
          console.log(error)
          // console.log(`stdout: ${stdout}`)
          // console.error(`stderr: ${stderr}`)
        }
      )
      // 将子进程的stdio 通过管道传递给当前进程，这样就会在控制台看到子进程的stdio信息，console.log 其实就是stdio的实现
      childProcess.stdout.pipe(process.stdout)
      // 监听进程的结束
      childProcess.on('exit', (code, signal) => {
        console.log(code, signal)
        if (code === 0) {
          console.log(chalk.green(description + '步骤执行成功！'))
          resolve(true)
        } else {
          reject(description + '步骤执行失败！')
        }
      })
    })
  }

  // 上传文件到服务器
  uploadProjectFile() {
    return new Promise((resolve, reject) => {
      ssh2Client
        .on('ready', () => {
          ssh2Client.sftp((err, sftp) => {
            if (err) {
              reject(err)
            }
            sftp.fastPut('./assets.tar.gz', path.join(this.config.directory, 'assets.tar.gz'), {}, (error, result) => {
              if (error) {
                reject(error)
              }
              console.log(chalk.green('资源上传服务器完成!'))
              resolve(true)
            })
          })
        })
        .connect({
          host: this.config.host, // 服务器 host
          port: 22, // 服务器 port
          username: this.config.username, // 服务器用户名
          password: this.config.password // 服务器密码
        })
    })
  }

  // 构建镜像
  createImage() {
    const { projectName, version, port, directory } = this.config
    const shell = `
        cd ${directory}
        if [ ! -d ${projectName}  ];then
          mkdir ${projectName}
        else
          rm -rf ./${projectName}/*
        fi
        tar -zxvf assets.tar.gz -C ./${projectName}
        rm -rf assets.tar.gz
        ls
        cd ${projectName}
        sudo docker stop ${projectName} || true
        sudo docker rm  ${projectName} || true
        sudo docker rmi  ${projectName} || true
        sudo docker build -t  ${projectName} .
        sudo docker run -d -p ${port}:${port} --name ${projectName} ${projectName}
        docker ps
        exit
      `
    return new Promise((resolve, reject) => {
      ssh2Client.shell((err, stream) => {
        if (err) {
          reject(err)
        }
        stream
          .end(shell)
          .on('data', data => {
            console.log(data.toString())
          })
          .on('close', () => {
            ssh2Client.end()
            console.log(chalk.green('镜像构建完成!'))
            resolve()
          })
      })
    })
  }

  // 删除文件
  removeFile(fileName) {
    return new Promise((resolve, reject) => {
      fs.unlink(fileName, function (error) {
        if (error) {
          reject(error)
        } else {
          console.log(chalk.green('本地压缩包删除成功，部署流程完成'))
          resolve(true)
        }
      })
    })
  }
}
