// 颜色相关的工具函数

/**
 * 从 RGB 到 HEX
 * @param r
 * @param g
 * @param b
 * @returns string
 */
export const rgb2Hex = (r: number, g: number, b: number): string => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

/**
 * 从 HEX 到 RGB
 * @param hex
 * @returns
 */
export const hex2Rgb = (hex: string): string => {
  hex = hex.replace(/^#/, '')
  let bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255
  return `RGB(${r}, ${g}, ${b})`
}

/**
 * 从 RGB 到 HSL
 * @param r
 * @param g
 * @param b
 * @returns
 */
export const rgb2Hsl = (r: number, g: number, b: number) => {
  // 将 RGB 值转换为范围为 [0, 1] 的值
  r /= 255
  g /= 255
  b /= 255
  // 计算最大值和最小值
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  // 计算色调（Hue）
  let h
  if (max === min) {
    h = 0
  } else if (max === r) {
    h = 60 * ((g - b) / (max - min))
  } else if (max === g) {
    h = 60 * ((b - r) / (max - min)) + 120
  } else {
    h = 60 * ((r - g) / (max - min)) + 240
  }
  if (h < 0) {
    h += 360
  }
  // 计算饱和度（Saturation）
  const s = max === 0 ? 0 : (max - min) / max
  // 计算亮度（Lightness）
  const l = (max + min) / 2
  // 返回 HSL 表示形式
  return `HSL(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}
