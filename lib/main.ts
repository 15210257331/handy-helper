export * from './color'
export * from './file'

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

/**
 * 找到数组元素中 某个属性的最大值
 * @param {*} array 源数组
 * @param {*} prop  属性
 * @returns
 */
export const findArrayMax = (array = [], prop: string) => {
  return Math.max.apply(
    null,
    (array || []).map(item => Number(item[prop] || 0))
  )
}

/**
 * 按照【field】字段对对象数组去重
 * @param {*} array
 * @param {*} field
 * @returns  去重后的数组
 */
export const uniqueArray = (array: any[], field: string = 'name') => {
  const map = new Map()
  return array.filter(v => !map.has(v[field]) && map.set(v[field], v))
}

/**
 * 数量千分位分隔符【,】添加
 */
export const formatNum = (val: string | number) => {
  const num = Number(val)
  if (num) {
    if (num >= 0 && num < 999999999) {
      const reg = /\d{1,3}(?=(\d{3})+$)/g
      return (num + '').replace(reg, '$&,')
    } else {
      return (num / 10000).toFixed(2) + ' w'
    }
  } else {
    return 0
  }
}

/**
 * 防抖函数
 * @param func  需要防抖的函数
 * @param delay 延迟时间
 * @returns
 * 使用示例
 * 需要防抖的函数
 * function handleInput(event) {
 *     console.log('Input value:', event.target.value);
 *  }
 *  包装防抖函数，延迟时间为 500 毫秒
 *   const debouncedHandleInput = debounce(handleInput, 500);
 *  在输入框的输入事件中使用防抖后的函数
 *   document.getElementById('input').addEventListener('input', debouncedHandleInput);
 */
export function debounce(func: Function, delay: number = 100) {
  let timer: any
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
