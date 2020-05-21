import React from 'react'
import classNames from 'classnames'
import useTheme from '../_style/useTheme'

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
        {/* 使用动态 CSS 的特性进行 display 属性选择与 margin 的设置 */}
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
