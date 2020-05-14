import React, { useState, useEffect, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import useTooltip from './useTooltip'
import { getPosition, defaultPosition } from './postition'
import TooltipArrow from './tooltipArrow'
import { getColors } from './style'
import useTheme from '../_style/useTheme'

const getRect = ref => {
  if (!ref || !ref.current) return defaultRect
  const rect = ref.current.getBoundingClientRect()
  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + document.documentElement.scrollTop,
    bottom: rect.bottom + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft,
    right: rect.right + document.documentElement.scrollLeft
  }
}

export default React.memo(({ children, parent, visible, offset, placement, type, className, hideArrow }) => {
  const theme = useTheme()
  const element = useTooltip()
  const contentRef = useRef(null)
  const [position, setPosition] = useState(defaultPosition)
  const colors = useMemo(() => getColors(type, theme), [type, theme])
  if (!parent) return null
  const handlePervent = e => {
    e.stopPropagetion()
    e.nativeEvent.stopImmediatePropagation()
  }
  const updateRect = () => {
    const position = getPosition(placement, getRect(parent), offset)
    setPosition(position)
  }

  useEffect(() => {
    const fn = () => updateRect()
    fn()
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return createPortal(
    <div className={classNames('nei-tooltip-content', className)} ref={contentRef} onClick={handlePervent}>
      {visible ? (
        <div className="nei-tooltip-content-inner">
          {!hideArrow && <TooltipArrow placement={placement} bgColor={colors.bgColor} />}
          {children}
        </div>
      ) : (
        ''
      )}
      <style jsx>{`
        .nei-tooltip-content {
          position: absolute;
          width: auto;
          top: ${position.top};
          left: ${position.left};
          transform: ${position.transform};
          background-color: ${colors.bgColor};
          color: ${colors.color};
          border-radius: 5px;
          padding: 0;
          z-index: 1000;
          box-shadow: ${type === 'default' ? '0 8px 30px rgba(0, 0, 0, 0.12)' : 'none'};
        }
        .nei-tooltip-content-inner {
          padding: 8px 16px;
          position: relative;
        }
      `}</style>
    </div>,
    element
  )
})
