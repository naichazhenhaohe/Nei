/**
 * @todo: 可以补充触发条件，目前触发条件仅为鼠标覆盖
 */
import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import TooltipContent from './tooptipContent'

export default React.memo(
  ({
    className,
    enterDelay = 100,
    leaveDelay = 0,
    visible: customVisible,
    children,
    placement = 'top',
    text = '',
    offset = 12,
    hideArrow = false,
    tooltipContentClass,
    type = 'default',
    onVisibleChange = () => {},
    ...props
  }) => {
    const prefixClass = 'nei-tooltip'
    // 计时器，用于设置提示器显示/消失的延迟
    const timer = useRef()
    const ref = useRef(null)
    const tooltipClass = classNames(prefixClass, className)
    const [visible, setVisible] = useState(false)
    const contentProps = {
      type,
      visible,
      offset,
      placement,
      hideArrow,
      parent: ref,
      className: tooltipContentClass
    }

    const handleMouseEvent = state => {
      changeVisible(state)
    }
    const changeVisible = mouseState => {
      const clear = () => {
        clearTimeout(timer.current)
        timer.current = undefined
      }
      const handler = mouseState => {
        setVisible(mouseState)
        onVisibleChange(mouseState)
        clear()
      }
      clear()
      if (mouseState) {
        timer.current = window.setTimeout(() => handler(true), enterDelay)
        return
      }
      timer.current = window.setTimeout(() => handler(false), leaveDelay)
    }
    // visible 属性用于手动控制tooltip的显示/隐藏
    useEffect(() => {
      if (customVisible === undefined) return
      changeVisible(customVisible)
    }, [customVisible])

    return (
      <div
        ref={ref}
        className={tooltipClass}
        onMouseEnter={() => handleMouseEvent(true)}
        onMouseLeave={() => handleMouseEvent(false)}
        {...props}
      >
        {children}
        <TooltipContent {...contentProps}>{text}</TooltipContent>
        <style jsx>{`
          .nei-tooltip {
            width: max-content;
          }
        `}</style>
      </div>
    )
  }
)
