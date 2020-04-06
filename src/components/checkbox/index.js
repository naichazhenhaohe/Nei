import React from 'react'
import classNames from 'classnames'

import './style/index.less'

export default function Checkbox(props) {
  const { checked = false, className, children, ...others } = props
  const prefixClass = 'nei-checkbox'
  const checkboxClass = classNames(prefixClass, className)

  const handleChange = e => {
    const { onChange } = props
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={`${prefixClass}-wrapper`}>
      <span className={prefixClass}>
        <input checked={checked} onChange={handleChange} type="checkbox" />
      </span>
      <span>{children}</span>
    </div>
  )
}
