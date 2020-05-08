import React from 'react'
import classNames from 'classnames'
import useTheme from '../_style/useTheme'

const getMargin = num => {
  if (num < 0) {
    return '0'
  }
  return `calc(${num * 15.25}pt + 1px * ${num - 1})`
}

export default React.memo(({ x = 1, y = 1, isInline, className, ...props }) => {
  const theme = useTheme()
  const gap = theme.layout.gap
  const prefixClass = 'nei-spacer'
  const spacerClass = classNames(prefixClass, className)

  const left = `calc(${x} * ${gap})`
  const top = `calc(${y} * ${gap})`

  return (
    <span className={spacerClass} {...props}>
      <style jsx>{`
        span {
          display: ${isInline ? 'inline-block' : 'block'};
          height: 1px;
          width: 1px;
          margin-left: ${left};
          margin-top: ${top};
        }
      `}</style>
    </span>
  )
})
