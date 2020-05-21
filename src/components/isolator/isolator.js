import React from 'react'
import classNames from 'classnames'

export default React.memo(({ direction = 'vertical', size = '8', className, children, ...props }) => {
  const prefixClass = 'nei-isolator'
  const isolatorClass = classNames(prefixClass, `${prefixClass}-${direction}`, className)
  const childList = []

  if (children.length && children.length > 1) {
    for (let child of children) {
      childList.push(child)
    }
  } else {
    childList.push(children)
  }

  const customStyle = function(index) {
    const len = childList.length
    let marginDirection = direction === 'horizontal' ? 'marginRight' : 'marginBottom'
    if (index === len - 1) {
      return {}
    }
    return {
      [marginDirection]: size + 'px'
    }
  }

  return (
    <div className={isolatorClass} {...props}>
      {childList.map((item, index) => (
        <div className={`${prefixClass}-item`} style={customStyle(index)} key={'item' + index}>
          {item}
        </div>
      ))}
      <style jsx>{`
        .nei-isolator {
          display: inline-flex;
        }
        .nei-isolator-vertical {
          flex-direction: column;
        }
        .nei-isolator-horizontal {
          align-items: center;
        }
      `}</style>
    </div>
  )
})
