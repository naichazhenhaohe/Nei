import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'
import { useCheckbox } from './checkboxContext'

import './style/index.less'

export default React.memo(
  ({
    initChecked = false,
    checked = false,
    value = '',
    className,
    onChange,
    children,
    disabled,
    ...props
  }) => {
    const [selfChecked, setSelfChecked] = useState(initChecked)
    const { updateState, inGroup, disabledAll, values } = useCheckbox()
    // 如果不在复选组中，依据传入的 disabled 判断
    // 若在组中，则同时考虑组内禁止状态和自身禁止状态
    const isDisabled = inGroup ? disabledAll || disabled : disabled

    const prefixClass = 'nei-checkbox'
    const checkboxClass = classNames(prefixClass, className)
    const innerClass = classNames(`${prefixClass}-inner`, {
      [`${prefixClass}-checked`]: !selfChecked
    })

    const handleChange = useCallback(
      e => {
        if (isDisabled) return
        if (inGroup && updateState) {
          updateState && updateState(value, !selfChecked)
        }
        setSelfChecked(!selfChecked)
        onChange && onChange(e)
      },
      [updateState, onChange, isDisabled, selfChecked]
    )

    if (inGroup) {
      useEffect(() => {
        const status = values.includes(value)
        if (status === selfChecked) return
        setSelfChecked(status)
      }, [values.join(',')])
    }

    useEffect(() => {
      if (checked === undefined) return
      setSelfChecked(checked)
    }, [checked])

    return (
      <label className={`${prefixClass}-wrapper`} {...props}>
        <span className="checkbox">
          <input
            type="checkbox"
            disabled={isDisabled}
            checked={selfChecked}
            onChange={handleChange}
          />
          <span className={innerClass}></span>
        </span>
        <span className="text">{children}</span>
        <style jsx>{`
          label {
            position: relative;
          }
          .checkbox {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5715;
            list-style: none;
            font-feature-settings: 'tnum';
            position: relative;
            top: -0.09em;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            vertical-align: middle;
            outline: none;
            cursor: pointer;
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
            cursor: pointer;
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
            border-radius: 2px;
            border-collapse: separate;
            transition: all 0.3s;
          }
          .nei-checkbox-checked {
            position: relative;
            top: 0;
            left: 0;
            display: block;
            width: 16px;
            height: 16px;
            direction: ltr;
            border-radius: 2px;
            border-collapse: separate;
            transition: all 0.3s;
            &::after {
              position: absolute;
              display: table;
              border: 2px solid #fff;
              border-top: 0;
              border-left: 0;
              transform: rotate(45deg) scale(1) translate(-50%, -50%);
              opacity: 1;
              transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
              content: ' ';
              top: 50%;
              left: 22%;
              width: 5.71428571px;
              height: 9.14285714px;
            }
          }
          .text {
            padding-right: 8px;
            padding-left: 8px;
          }
        `}</style>
      </label>
    )
  }
)
