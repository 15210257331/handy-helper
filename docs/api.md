---
outline: deep
---
# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

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

## 函数列表

### findArrayMax()

找到数组元素中 某个属性的最大值

### uniqueArray()

* 按照【field】字段对对象数组去重

* @param {*} array

* @param {*} field

* @returns  去重后的数组

### formatNum()

数量千分位分隔符【,】添加

### debounce()

防抖函数
