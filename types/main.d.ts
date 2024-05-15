export declare function setupCounter(element: HTMLButtonElement): void;
/**
 * 文件大小单位转换
 * @param kb
 * @returns
 */
export declare function formatSizeUnits(kb: number): string;
/**
 * 将文件大小从一个单位转换为另一个单位。
 *
 * @param {number} size 文件大小。
 * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
 * @return {string} 转换后的文件大小，带单位。
 */
export declare function convertFileSize(size: number, fromUnit: string, toUnit: string, decimalPoint?: number): string;
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
