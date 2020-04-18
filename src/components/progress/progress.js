import React, { useMemo } from 'react'

const getPrecent = (value, max) => {
  const result = +value / +max
  const percentage = (Number.isNaN(result) ? 0 : result) * 100
  if (percentage > 100) return 100
  if (percentage < 0) return 0
  // 若百分数不包含小数则直接返回
  if (!`${percentage}`.includes('.')) return percentage
  // 若小数部分位数小于2位，则直接返回
  const decimal = `${percentage}`.split('.')[1]
  if (decimal.length < 2) return percentage
  // 若小鼠部分多于两位，则进行舍弃
  return percentage.toFixed(2)
}
const usePrecent = (value, max) => useMemo(() => getPrecent(value, max), [value, max])
const getColor = (ratio, type, colors = {}) => {
  const defaultColor = {
    default: '#000',
    success: '#0070f3',
    secondary: '#666',
    warning: '#f5a623',
    error: '#f00'
  }
  if (typeof colors === 'string') return colors
  const coustomColorKeys = Object.keys(colors)
  if (coustomColorKeys.length === 0) return defaultColor[type]
  const coustomColorKey = coustomColorKeys.find(key => ratio <= +key)
  if (!coustomColorKey || Number.isNaN(+coustomColorKey)) return defaultColor[type]
  return colors[+coustomColorKey]
}
export default React.memo(
  ({ value = 0, max = 100, type = 'default', className, colors, children, ...props }) => {
    const prefixClass = 'nei-progress'
    const percentage = usePrecent(value, max)
    const color = getColor(percentage, type, colors)
    return (
      <div className={prefixClass}>
        <div className="nei-progress-inner" title={`${percentage}%`} />
        <progress className={className} value={value} max={max} {...props} />
        <style jsx>{`
          progress {
            position: fixed;
            top: -1000px;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
          .nei-progress {
            position: relative;
            width: 100%;
            height: 0.625rem;
            background-color: #eaeaea;
            border-radius: 5px;
          }
          .nei-progress-inner {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            bottom: 0;
            transition: all 100ms ease-in;
            border-radius: 5px;
            background-color: ${color};
            width: ${percentage + '%'};
          }
        `}</style>
      </div>
    )
  }
)
