import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style/index.less'

export default function Button(props) {
  const { type, className, children, plusStyle, danger, disabled, ghost, ...others } = props
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

Button.PropTypes = {
  text: PropTypes.string
}
