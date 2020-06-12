import React, { useState, useEffect, useCallback, useMemo } from 'react'
import classNames from 'classnames'
import { useCheckbox } from './checkboxContext'
import useTheme from '../_style/useTheme'

export default React.memo(
  ({ initChecked = false, checked, value = '', className, onChange, children, disabled, ...props }) => {
    const theme = useTheme()
    const [isChecked, setIsChecked] = useState(initChecked)
    const { updateState, inGroup, disabledAll, values } = useCheckbox()
    // 如果不在复选组中，依据传入的 disabled 判断
    // 若在组中，则同时考虑组内禁止状态和自身禁止状态
    const isDisabled = inGroup ? disabledAll || disabled : disabled

    const prefixClass = 'nei-checkbox'
    const checkboxClass = classNames(prefixClass, className)
    const innerClass = useMemo(
      () =>
        classNames(`${prefixClass}-inner`, {
          [`${prefixClass}-checked`]: isChecked
        }),
      [isChecked]
    )

    const handleChange = useCallback(
      e => {
        if (isDisabled) return
        if (inGroup) {
          updateState(value, !isChecked)
        }
        setIsChecked(!isChecked)
        onChange && onChange(e)
      },
      [updateState, onChange, isDisabled, isChecked]
    )

    if (inGroup) {
      useEffect(() => {
        const status = values.includes(value)
        if (status === isChecked) return
        setIsChecked(status)
      }, [values.join(',')])
    }

    useEffect(() => {
      if (checked === undefined) return
      setIsChecked(checked)
    }, [checked])

    return (
      <label className={`${prefixClass}-wrapper`} {...props}>
        <span className="checkbox">
          <input type="checkbox" disabled={isDisabled} checked={isChecked} onChange={handleChange} />
          <span className={innerClass} />
        </span>
        <span className="nei-checkbox-text">{children}</span>
        <style jsx>{`
          label {
            position: relative;
            cursor: ${disabled || disabledAll ? 'not-allowed' : 'pointer'};
          }
          .checkbox {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            list-style: none;
            position: relative;
            top: -0.09em;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            vertical-align: middle;
            outline: none;
            cursor: ${disabled || disabledAll ? 'not-allowed' : 'pointer'};
          }
          input {
            box-sizing: border-box;
            padding: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            cursor: ${disabled || disabledAll ? 'not-allowed' : 'pointer'};
            opacity: 0;
          }
          .nei-checkbox-inner {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            width: 16px;
            height: 16px;
            direction: ltr;
            border-radius: ${theme.layout.radius};
            border-collapse: separate;
            transition: all 0.3s;
            background-color: ${disabled || disabledAll ? theme.color.disabledDark : theme.color.background};
            border: 1px solid ${disabled || disabledAll ? theme.color.disabledDark : theme.color.border};
          }
          .nei-checkbox-checked {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            width: 16px;
            height: 16px;
            direction: ltr;
            border-radius: ${theme.layout.radius};
            border-collapse: separate;
            transition: ${theme.layout.transitionAll};
            background-color: ${disabled || disabledAll ? theme.color.disabledDark : theme.color.primary};
            border: 1px solid ${disabled || disabledAll ? theme.color.disabledDark : theme.color.primary};
          }
          .nei-checkbox-checked::after {
            content: '';
            position: absolute;
            display: table;
            border-width: 2px;
            border-style: solid;
            border-color: ${theme.color.border};
            border-top: 0;
            border-left: 0;
            transform: rotate(45deg) scale(1) translate(-50%, -50%);
            transition: ${theme.layout.transitionAll};
            top: 50%;
            left: 22%;
            width: 5px;
            height: 10px;
          }
          .nei-checkbox-text {
            padding: 0 ${theme.layout.quarterGap};
          }
        `}</style>
      </label>
    )
  }
)
