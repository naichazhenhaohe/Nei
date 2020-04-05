import React from 'react'
import classNames from 'classnames'

import './style/index.less'

export default function Card(props) {
  const { title, bordered = true, className, children, plusStyle, ...others } = props
  const prefixClass = 'nei-card'
  const cardClass = classNames(prefixClass, className, {
    [`${prefixClass}-bordered`]: bordered
  })
  let whereAddTheStyle = ''
  if (plusStyle) {
    if (typeof plusStyle === 'string') {
      whereAddTheStyle = 'card'
    } else if (plusStyle.head) {
      whereAddTheStyle = 'head'
    } else if (plusStyle.body) {
      whereAddTheStyle = 'body'
    }
  }
  const body = (
    <div className={`${prefixClass}-body`}>
      {children}
      <style jsx>{`
        ${whereAddTheStyle === 'body' ? plusStyle.body : ''}
      `}</style>
    </div>
  )
  let head = ''
  if (title) {
    head = (
      <div className={`${prefixClass}-head`}>
        <div className={`${prefixClass}-head-wrapper`}>
          <div className={`${prefixClass}-head-title`}>{title}</div>
        </div>
        <style jsx>{`
          ${whereAddTheStyle === 'head' ? plusStyle.head : ''}
        `}</style>
      </div>
    )
  }

  return (
    <div className={cardClass} {...others}>
      {head}
      {body}
      <style jsx>{`
        ${whereAddTheStyle === 'card' ? plusStyle : ''}
      `}</style>
    </div>
  )
}
