import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import useSelect from './useSelect'
import useClickAnywhere from '../_util/useClickAnywhere'
import { useSelectContext } from './selectContext'
import useTheme from '../_style/useTheme'

const defaultRect = {
  top: -1000,
  left: -1000,
  right: -1000,
  width: 0
}

const getRect = ref => {
  if (!ref || !ref.current) return defaultRect
  const rect = ref.current.getBoundingClientRect()
  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    top: rect.bottom + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft
  }
}

export default React.memo(({ visible, children, className }) => {
  const theme = useTheme()
  const { ref } = useSelectContext()
  const el = useSelect()
  const [rect, setRect] = useState(defaultRect)
  if (!ref) return null

  const updateRect = () => {
    const { top, left, right, width: nativeWidth } = getRect(ref)
    setRect({ top, left, right, width: nativeWidth })
  }

  useEffect(() => {
    const fn = () => updateRect()
    fn()
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  useClickAnywhere(() => {
    const { top, left } = getRect(ref)
    const shouldUpdatePosition = top !== rect.top || left !== rect.left
    if (!shouldUpdatePosition) return
    updateRect()
  })

  useEffect(() => {
    if (!ref || !ref.current) return
    ref.current.addEventListener('mouseenter', updateRect)
    return () => {
      if (!ref || !ref.current) return
      ref.current.removeEventListener('mouseenter', updateRect)
    }
  }, [ref])

  const handleClick = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  if (!el) return null
  return createPortal(
    <>
      {visible && (
        <div className="dropdown" onClick={handleClick}>
          <div className={`select-dropdown ${className}`}>{children}</div>
          <style jsx>{`
            .select-dropdown {
              border-radius: ${theme.layout.radius};
              box-shadow: ${theme.layout.boxShadow};
              background-color: ${theme.color.background};
              max-height: 15rem;
              overflow-y: auto;
              overflow-anchor: none;
              padding: ${theme.layout.quarterGap} 0;
            }
            .dropdown {
              position: absolute;
              width: ${rect.width}px;
              top: ${rect.top + 2}px;
              left: ${rect.left}px;
              z-index: 100;
            }
          `}</style>
        </div>
      )}
    </>,
    el
  )
})
