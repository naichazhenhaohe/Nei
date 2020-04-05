import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style/index.less'

export default function Button(props) {
  const { type, className, children, plusStyle, danger, disabled, ghost } = props

  const handleClick = e => {
    const { onClick } = props
    if (onClick) {
      onClick(e)
    }
  }

  console.log(disabled)

  let btnClass = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-danger`]: !!danger && type !== 'link',
    [`btn-danger-link`]: !!danger && type === 'link',
    [`btn-ghost`]: !!ghost
  })
  return (
    <button className={btnClass} onClick={handleClick} disabled={!!disabled}>
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
