import React, { useMemo } from 'react'
import { useSelectContext } from './selectContext'

export default React.memo(
  ({ value: optionValue, className, children, preventAllEvents = false, disabled, ...props }) => {
    const { updateValue, value, disableAll } = useSelectContext()
    const isDisabled = useMemo(() => disabled || disableAll, [disableAll, disabled])
    const selected = useMemo(() => (value ? optionValue === value : false), [optionValue, value])
    const bgColor = useMemo(() => {
      if (isDisabled) return '#fafafa'
      return selected ? '#fafafa' : '#fff'
    }, [selected, isDisabled])
    const color = useMemo(() => {
      if (isDisabled) return '#888'
      return selected ? '#000' : '#666'
    }, [selected, isDisabled])
    const handleClick = event => {
      if (preventAllEvents) return
      event.stopPropagation()
      event.nativeEvent.stopImmediatePropagation()
      event.preventDefault()
      if (isDisabled) return
      updateValue && updateValue(optionValue)
    }
    return (
      <>
        <div className={className} onClick={handleClick} {...props}>
          {children}
        </div>
        <style jsx>{`
          div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-weight: normal;
            white-space: pre;
            font-size: 0.75rem;
            height: calc(1.688 * 16pt);
            padding: 0 8pt;
            background-color: ${bgColor};
            color: ${color};
            user-select: none;
            border: 0;
            cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
            transition: background 0.2s ease 0s, border-color 0.2s ease 0s;
          }
          div:first-of-type {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          div:last-of-type {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          div:hover {
            background-color: #fafafa;
          }
        `}</style>
      </>
    )
  }
)
