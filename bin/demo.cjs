#!/usr/bin/env node

console.log('这是一个js工具函数库 handy-helper')
// 引入 commander 模块来解析命令行参数
const { program } = require('commander');

// 设置命令行参数的版本号
program
.name('handy-helper')
.description('这是一个js工具函数库 handy-helper')
.version('1.0.0');

// 设置命令行参数的使用方式
program.on('--help', () => {
  console.log('');
  console.log('Example usage:');
  console.log('  $ xxx command1 arg1 arg2');
  console.log('  $ xxx command2 arg1');
  console.log('  $ xxx command3');
});

// 解析命令行参数
program.parse(process.argv);