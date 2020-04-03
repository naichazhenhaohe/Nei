import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style/index.less'

export default function Button(props) {
  const { type, className, children, plusStyle } = props
  console.log(plusStyle)
  let btnClass = classNames('btn', className, {
    [`btn-${type}`]: type
  })
  return (
    <button className={btnClass}>
      {children}
      <style jsx>{`
        ${plusStyle}
      `}</style>
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.string
}
