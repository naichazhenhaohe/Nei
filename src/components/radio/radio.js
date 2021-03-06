import React, { useState, useEffect, useMemo, useCallback } from 'react'
import classNames from 'classnames'
import { useRadioContext } from './radioContext'
import useTheme from '../_style/useTheme'

export default React.memo(
  ({ className, disabled = false, checked, onChange, value: radioValue, id: radioId, children, ...props }) => {
    const prefixClass = 'nei-radio'
    const radioClass = classNames(prefixClass, className)
    const innerClass = classNames(`${prefixClass}-inner`)
    const { value: groupValue, disabledAll, inGroup, updateState } = useRadioContext()
    const [isChecked, setIsChecked] = useState(!!checked)
    const isDisabled = useMemo(() => disabled || disabledAll, [disabled, disabledAll])
    const theme = useTheme()

    if (inGroup) {
      useEffect(() => {
        setIsChecked(groupValue === radioValue)
        console.log(!isChecked)
      }, [groupValue, radioValue])
    }

    useEffect(() => setIsChecked(!!checked), [checked])

    const handleChange = useCallback(
      e => {
        if (isDisabled) return
        if (inGroup) {
          updateState('' + radioValue)
        }
        setIsChecked(!isChecked)
        onChange && onChange(e)
      },
      [updateState, onChange, isDisabled, isChecked]
    )

    return (
      <div className={'radio-wrapper'}>
        <label className={radioClass} htmlFor={radioId}>
          <input
            type="radio"
            id={radioId}
            disabled={isDisabled}
            checked={isChecked}
            onChange={handleChange}
            {...props}
          />
          <span className="text">{children}</span>
          <span className={innerClass} />
        </label>
        <style jsx>{`
          .radio-wrapper {
            display: flex;
            width: initial;
            align-items: flex-start;
            position: relative;
            margin: 0px;
          }
          label {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            cursor: pointer;
            margin-left: 1.375rem;
          }
          input {
            opacity: 0;
            visibility: hidden;
            width: 1px;
            height: 1px;
            top: -1000px;
            right: -1000px;
            position: fixed;
            overflow: hidden;
          }
          .nei-radio-inner {
            position: absolute;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            height: 14px;
            width: 14px;
            border-radius: 50%;
            border-width: ${isChecked ? 0 : '1px'};
            border-style: solid;
            border-image: initial;
            transition: ${theme.layout.transitionAll};
            border-color: ${isDisabled ? theme.color.disabledDark : theme.color.primary};
          }
          .nei-radio-inner:before {
            content: '';
            position: absolute;
            height: 14px;
            width: 14px;
            border-radius: 50%;
            transform: scale(${isChecked ? 1 : 0});
            transition: ${theme.layout.transitionAll};
            background-color: ${isDisabled ? theme.color.disabledDark : theme.color.primary};
            border-style: solid;
            border-width: 1px;
            border-image: initial;
            border-color: ${isDisabled ? theme.color.disabledDark : theme.color.primary};
          }
          .text {
            font-size: 1rem;
            font-weight: bold;
            user-select: none;
          }
        `}</style>
      </div>
    )
  }
)
