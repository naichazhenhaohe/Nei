import React, { useMemo } from 'react'
import classNames from 'classnames'

const getColor = (type, customColor) => {
  const colors = {
    default: {
      color: '#000'
    },
    success: {
      color: '#07f'
    },
    warning: {
      color: '#fa2'
    },
    error: {
      color: '#f00'
    },
    secondary: {
      color: '#666'
    },
    dark: {
      color: '#000',
      bgColor: '#fff'
    },
    lite: {
      color: '#000',
      bgColor: '#eaeaea'
    }
  }
  const hideBorder = type === 'lite'
  const style = {
    ...colors[type],
    bgColor: colors[type].bgColor || '#fff',
    borderColor: hideBorder ? 'transparent' : colors[type].color
  }
  return customColor === undefined
    ? style
    : { color: '#fff', bgColor: customColor, borderColor: customColor }
}

export default React.memo(
  ({ type = 'default', children, className, color: customColor, ...props }) => {
    const prefixClass = 'nei-tag'
    const tagClass = classNames(prefixClass, className)
    const { color, bgColor, borderColor } = useMemo(() => getColor(type, customColor), [
      type,
      customColor
    ])

    return (
      <span className={tagClass} {...props}>
        {children}
        <style jsx>{`
          span {
            display: inline-block;
            line-height: 20px;
            font-size: 0.875rem;
            height: auto;
            border-radius: 5px;
            border: 1px solid ${borderColor};
            background-color: ${bgColor};
            color: ${color};
            padding: 0 6px;
          }
        `}</style>
      </span>
    )
  }
)
