import React from 'react'
import classNames from 'classnames'

import './style/index.less'

export default function Tips(props) {
  const { className, children, ...others } = props
  const prefixClass = 'nei-tips'
  const tipsClass = classNames(prefixClass, className)
  return <div className={tipsClass}></div>
}
