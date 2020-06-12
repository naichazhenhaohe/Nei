import React, { useState, useEffect, useMemo, useCallback } from 'react'
import useTheme from '../_style/useTheme'

export default React.memo(({ checked = false, disabled, onChange, className, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked)
  const theme = useTheme()
  const handleChange = useCallback(
    event => {
      if (disabled) return
      setIsChecked(!isChecked)
      onChange && onChange(event)
    },
    [disabled, isChecked, onChange]
  )

  useEffect(() => {
    if (checked === undefined) return
    setIsChecked(checked)
  }, [checked])

  return (
    <label className={className} {...props}>
      <input type="checkbox" disabled={disabled} checked={isChecked} onChange={handleChange} />
      <div className="nei-switch" disabled={disabled}>
        <span className="inner" />
      </div>
      <style jsx>{`
        label {
          display: inline-block;
          vertical-align: center;
          white-space: nowrap;
          user-select: none;
          padding: 3px 0;
          position: relative;
          cursor: ${disabled ? 'not-allowed' : 'pointer'};
        }
        input {
          overflow: hidden;
          visibility: hidden;
          height: 0;
          opacity: 0;
          width: 0;
          position: absolute;
          background-color: transparent;
          z-index: -1;
        }
        .nei-switch {
          height: 0.875rem;
          width: 1.75rem;
          border-radius: 0.875rem;
          transition-delay: 0.12s;
          transition-duration: 0.2s;
          transition-property: background, border;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
          position: relative;
          border: 1px solid transparent;
          background-color: ${isChecked ? theme.color.primary : '#eaeaea'};
          padding: 0;
        }
        .nei-switch[disabled] {
          background-color: ${isChecked ? theme.color.disabledDark : '#eaeaea'};
        }
        .inner {
          width: calc(0.875rem - 2px);
          height: calc(0.875rem - 2px);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: ${isChecked ? `calc(100% - (0.875rem - 2px))` : '1px'};
          transition: left 280ms cubic-bezier(0, 0, 0.2, 1);
          box-shadow: ${isChecked ? 'rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0' : 'none'};
          border-radius: 50%;
          background-color: ${disabled ? theme.color.disabledBackground : theme.color.background};
        }
      `}</style>
    </label>
  )
})
