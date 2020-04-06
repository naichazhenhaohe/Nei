import React from 'react'
import classNames from 'classnames'

import './style/index.less'

export default function Isolator(props) {
  const { direction = 'vertical', size = '8', className, children, ...others } = props
  const prefixClass = 'nei-isolator'
  const isolatorClass = classNames(prefixClass, `${prefixClass}-${direction}`, className)
  // console.log('type: ', children)
  const childList = []
  if (children.length && children.length > 1) {
    for (let child of children) {
      childList.push(child)
    }
  } else {
    childList.push(children)
  }
  console.log('childList: ', childList)
  const customStyle = function(index) {
    const len = childList.length
    /**
     * TODO
     * if the value of direction is not 'vertical' or 'horizontal',
     * then no style will be added.
     * But it's better to judge the value of direction somewhere eles.
     */
    let marginDirection = ''
    if (direction === 'vertical') {
      marginDirection = 'marginBottom'
    } else if (direction === 'horizontal') {
      marginDirection = 'marginRight'
    }
    if (index === len - 1 || !marginDirection) {
      return {}
    } else {
      return {
        [marginDirection]: size + 'px'
      }
    }
  }
  return (
    <div className={isolatorClass}>
      {childList.map((item, index) => (
        <div className={`${prefixClass}-item`} style={customStyle(index)} key={'item' + index}>
          {item}
        </div>
      ))}
    </div>
  )
}
