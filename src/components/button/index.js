import React from 'react'
import PropTypes from 'prop-types'

export default function Button({ text, color }) {
  return (
    <button className="btn">
      {text}
      <style jsx>{`
        .btn {
          background: ${color};
        }
      `}</style>
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.any
}
