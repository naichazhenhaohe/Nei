import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  console.log('child', props)
  return (
    <button className="btn">
      {props.text}
      <style jsx>{`
        .btn {
          background: ${props.color};
        }
      `}</style>
    </button>
  )
}

Button.PropTypes = {
  text: PropTypes.any
}
