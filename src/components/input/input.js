import React, { useEffect, useState, useMemo, useCallback } from 'react'
import classNames from 'classnames'

const getColors = type => {
  const colors = {
    default: {
      color: '#000',
      borderColor: '#eaeaea',
      hoverBorder: '#666'
    },
    secondary: {
      color: '#000',
      borderColor: '#666',
      hoverBorder: '#666'
    },
    success: {
      color: '#000',
      borderColor: '#3291ff',
      hoverBorder: '#0070f3'
    },
    warning: {
      color: '#000',
      borderColor: '#f7b955',
      hoverBorder: '#f5a623'
    },
    error: {
      color: '#f00',
      borderColor: '#f00',
      hoverBorder: '#f90'
    }
  }

  if (!type) return colors.default
  return colors[type]
}

export default React.memo(
  ({
    disabled = false,
    readOnly = false,
    clearable = false,
    autoComplete = 'off',
    placeholder = '',
    initValue = '',
    value,
    className,
    onChange,
    type = 'default',
    children,
    ...props
  }) => {
    const prefixClass = 'nei-input'
    const boxClass = classNames(`${prefixClass}-box`, className)
    const statusClass = classNames({
      'nei-input-disabled': disabled,
      'nei-input-readOnly': readOnly
    })
    const [selfValue, setSelfValue] = useState(initValue)
    const { color, borderColor, hoverBorder } = useMemo(() => getColors(type), [type])

    useEffect(() => {
      if (value === undefined) return
      setSelfValue(value)
    }, [value])

    const handleChange = useCallback(
      event => {
        if (disabled || readOnly) return
        setSelfValue(event.target.value)
        onChange && onChange(event)
      },
      [disabled, readOnly, onChange]
    )

    return (
      <div className={boxClass}>
        <div className={classNames('nei-input-wrapper', statusClass)}>
          <input
            className={statusClass}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            value={selfValue}
            onChange={handleChange}
            {...props}
          />
        </div>
        <style jsx>{`
          .nei-input-box {
            display: inline-flex;
            align-items: center;
          }
          .nei-input-wrapper {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            height: 100%;
            flex: 1;
            user-select: none;
            border-radius: 5px;
            border: 1px solid ${borderColor};
          }
          .nei-input-wrapper.nei-input-disabled {
            background-color: #fafafa;
            border-color: #eaeaea;
            cursor: not-allowed;
          }
          input {
            margin: 4px 10px;
            padding: 0;
            box-shadow: none;
            font-size: 14px;
            background-color: transparent;
            border: none;
            color: ${color};
            outline: none;
            border-radius: 0;
            width: 100%;
            -webkit-appearance: none;
          }
          input.nei-input-disabled {
            cursor: not-allowed;
          }
          ::placeholder,
          ::-moz-placeholder,
          :-ms-input-placeholder,
          ::-webkit-input-placeholder {
            color: '#999';
          }
        `}</style>
      </div>
    )
  }
)
