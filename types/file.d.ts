/**
 * 文件大小单位转换
 * @param kb
 * @returns
 */
export declare function formatSizeUnits(kb: number): string;
/**
 * 将文件大小从一个单位转换为另一个单位。
 * @param {number} size 文件大小。
 * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
 * @return {string} 转换后的文件大小，带单位。
 */
export declare function convertFileSize(size: number, fromUnit: string, toUnit: string, decimalPoint?: number): string;
