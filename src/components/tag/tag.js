import React, { useMemo } from 'react'
import classNames from 'classnames'
import useTheme from '../_style/useTheme'
import { getColor } from './style'

export default React.memo(({ type = 'default', children, className, color: customColor, ...props }) => {
  const prefixClass = 'nei-tag'
  const tagClass = classNames(prefixClass, className)
  const theme = useTheme()
  const { color, bgColor, borderColor } = useMemo(() => getColor(type, customColor, theme), [type, customColor])

  return (
    <span className={tagClass} {...props}>
      {children}
      <style jsx>{`
        span {
          display: inline-block;
          line-height: 20px;
          font-size: 0.875rem;
          height: auto;
          border-radius: ${theme.layout.radius};
          border: 1px solid ${borderColor};
          background-color: ${bgColor};
          color: ${color};
          padding: ${theme.layout.quarterGap};
        }
      `}</style>
    </span>
  )
})
