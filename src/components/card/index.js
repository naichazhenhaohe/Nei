import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function Card(props) {
  const { type, className, children, plusStyle } = props
  console.log(plusStyle)
  let btnClass = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-plusStyle`]: plusStyle
  })
  return (
    <button className={btnClass}>
      {children}

      <style jsx>{`
        .btn-primary {
          background: red;
        }
        ${plusStyle}
      `}</style>
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.string
}
