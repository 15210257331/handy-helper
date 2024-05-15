export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

// 颜色转换相关函数

/**
 * 文件大小单位转换
 * @param kb
 * @returns
 */
export function formatSizeUnits(kb: number) {
  let units = ['KB', 'MB', 'GB', 'TB', 'PB']
  let unitIndex = 0

  while (kb >= 1024 && unitIndex < units.length - 1) {
    kb /= 1024
    unitIndex++
  }

  return `${kb.toFixed(2)} ${units[unitIndex]}`
}

/**
 * 将文件大小从一个单位转换为另一个单位。
 * @param {number} size 文件大小。
 * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
 * @return {string} 转换后的文件大小，带单位。
 */
export function convertFileSize(size:number, fromUnit:string, toUnit:string, decimalPoint = 2) {
  // 定义单位与字节之间的转换关系
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  // 获取初始单位和目标单位的索引
  const fromIndex = units.indexOf(fromUnit)
  const toIndex = units.indexOf(toUnit)

  // 如果单位不在列表中，抛出错误
  if (fromIndex === -1 || toIndex === -1) {
    throw new Error('Invalid units')
  }

  // 计算初始单位与目标单位之间的转换系数
  const exponent = toIndex - fromIndex
  // 计算结果大小
  const resultSize = size / Math.pow(1024, exponent)

  // 返回格式化后的结果
  return parseFloat(resultSize.toFixed(decimalPoint)) + ' ' + toUnit
}

// // 示例使用
// console.log(convertFileSize(1, 'GB', 'MB')) // 输出: 1024.00 MB
// console.log(convertFileSize(1, 'MB', 'KB')) // 输出: 1024.00 KB
// console.log(convertFileSize(1, 'KB', 'B')) // 输出: 1024.00 B
// console.log(convertFileSize(1, 'MB', 'GB', 5)) // 输出: 0.00098 GB


/**
 * 找到数组元素中 某个属性的最大值
 * @param {*} array 源数组
 * @param {*} prop  属性
 * @returns
 */
export const findArrayMax = (array = [], prop:string) => {
  return Math.max.apply(
    null,
    (array || []).map(item => Number(item[prop] || 0))
  );
};



/**
 * 按照【field】字段对对象数组去重
 * @param {*} array
 * @param {*} field
 * @returns  去重后的数组
 */
export const uniqueArray = (array:any[], field:string = 'name') => {
  const map = new Map();
  return array.filter(v => !map.has(v[field]) && map.set(v[field], v));
};

/**
 * 数量千分位分隔符【,】添加
 */
export const formatNum = (val:string | number) => {
  const num = Number(val);
  if (num) {
    if (num >= 0 && num < 999999999) {
      const reg = /\d{1,3}(?=(\d{3})+$)/g;
      return (num + '').replace(reg, '$&,');
    } else {
      return (num / 10000).toFixed(2) + ' w';
    }
  } else {
    return 0;
  }
};