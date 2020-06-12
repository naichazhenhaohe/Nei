import React, { useEffect, useState, useMemo, useCallback } from 'react'
import classNames from 'classnames'
import { getColors, getSizes } from './style'
import useTheme from '../_style/useTheme'

export default React.memo(
  ({
    disabled = false,
    readOnly = false,
    size = 'default',
    autoComplete = 'off',
    placeholder = '',
    initValue = '',
    value,
    className,
    onChange,
    type = 'default',
    onBlur,
    onFocus,
    ...props
  }) => {
    const prefixClass = 'nei-input'
    const boxClass = classNames(`${prefixClass}-box`, className)
    const theme = useTheme()
    const [selfValue, setSelfValue] = useState(initValue)
    const [focus, setFocus] = useState(false)
    const { color, borderColor, focusBorderColor } = useMemo(() => getColors(type, theme), [type, theme])
    const { height, fontSize } = useMemo(() => getSizes(size, theme), [size, theme])

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

    const handleFocus = e => {
      setFocus(true)
      onFocus && onFocus(e)
    }

    const handleBlur = e => {
      setFocus(false)
      onBlur && onBlur(e)
    }

    return (
      <div className={boxClass}>
        <div className={`nei-input-wrapper ${focus ? 'nei-focused' : ''}`}>
          <input
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            value={selfValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </div>
        <style jsx>{`
          .nei-input-box {
            display: inline-flex;
            align-items: center;
            height: ${height};
            background-color: ${disabled ? theme.color.disabledBackground : theme.color.background};
          }
          .nei-input-wrapper {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            height: 100%;
            flex: 1;
            user-select: none;
            border-radius: 5px;
            border: 1px solid ${disabled ? theme.color.disabledColor : borderColor};
            transition: ${theme.layout.transitionAll};
          }
          .nei-focused {
            border-color: ${focusBorderColor};
          }
          input {
            padding: ${`${theme.layout.quarterGap} ${theme.layout.halfGap}`};
            box-shadow: none;
            font-size: ${fontSize};
            background-color: transparent;
            border: none;
            color: ${color};
            outline: none;
            border-radius: 0;
            width: 100%;
            -webkit-appearance: none;
          }
          input[disabled] {
            background-color: #fafafa;
            border-color: #eaeaea;
            cursor: not-allowed;
          }
          ::placeholder,
          ::-moz-placeholder,
          :-ms-input-placeholder,
          ::-webkit-input-placeholder {
            color: ${theme.color.placeholder};
          }
        `}</style>
      </div>
    )
  }
)
