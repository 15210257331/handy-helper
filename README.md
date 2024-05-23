
# Handy Helper 使用文档

## 简介

`handy-helper` 提供了一系列常用的辅助函数，帮助开发者更轻松地处理常见的编程任务

## 安装

可以通过 npm 安装 `handy-helper`：

```bash
npm install handy-helper
```

或者通过 yarn 安装

```bash
yarn add handy-helper
```

## 使用

```javascript
  import { formatSizeUnits } from 'handy-helper';
  const res = formatSizeUnits(1212312)
  console.log(res) // 1,212,312

  import * as handyHelper from 'handy-helper';
  const res = handyHelper.formatSizeUnits(1212312)
  console.log(res) // 1,212,312
```

更多使用方式详见API文档 [handy-helper APIs](https://vitepress.dev/reference/runtime-api#usedata).
