import React from 'react'
import classNames from 'classnames'

import './style/index.less'

export default React.memo(
  ({ type, className, children, plusStyle, danger, disabled, ghost, ...others }) => {
    const prefixClass = 'nei-btn'
    const handleClick = e => {
      const { onClick } = props
      if (onClick) {
        onClick(e)
      }
    }

    let btnClass = classNames(prefixClass, className, {
      [`${prefixClass}-${type}`]: type,
      [`${prefixClass}-danger`]: !!danger && type !== 'link',
      [`${prefixClass}-danger-link`]: !!danger && type === 'link',
      [`${prefixClass}-ghost`]: !!ghost
    })
    return (
      <button className={btnClass} onClick={handleClick} disabled={!!disabled} {...others}>
        {children}
        <style jsx>{`
          ${plusStyle ? plusStyle : ''}
        `}</style>
      </button>
    )
  }
)
