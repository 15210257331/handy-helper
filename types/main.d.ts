export * from './color';
export * from './file';
export declare function setupCounter(element: HTMLButtonElement): void;
/**
 * 找到数组元素中 某个属性的最大值
 * @param {*} array 源数组
 * @param {*} prop  属性
 * @returns
 */
export declare const findArrayMax: (array: never[] | undefined, prop: string) => number;
/**
 * 按照【field】字段对对象数组去重
 * @param {*} array
 * @param {*} field
 * @returns  去重后的数组
 */
export declare const uniqueArray: (array: any[], field?: string) => any[];
/**
 * 数量千分位分隔符【,】添加
 */
export declare const formatNum: (val: string | number) => string | 0;
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
