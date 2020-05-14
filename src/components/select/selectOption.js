import React, { useMemo } from 'react'
import { useSelectContext } from './selectContext'
import useTheme from '../_style/useTheme'

export default React.memo(({ value: optionValue, className, children, disabled, ...props }) => {
  const theme = useTheme()
  const { updateValue, value, disableAll } = useSelectContext()
  const isDisabled = useMemo(() => disabled || disableAll, [disableAll, disabled])
  const selected = useMemo(() => (value ? optionValue === value : false), [optionValue, value])
  const bgColor = useMemo(() => {
    if (isDisabled) return theme.color.disabledBackground
    return selected ? theme.color.selectedBackground : theme.color.background
  }, [selected, isDisabled])
  const color = useMemo(() => {
    if (isDisabled) return theme.color.disabledColor
    return selected ? theme.color.selectedValue : theme.color.value
  }, [selected, isDisabled])
  const handleClick = event => {
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
          font-size: ${theme.layout.fontSize};
          height: calc(1.688 * ${theme.layout.gap});
          padding: 0 ${theme.layout.halfGap};
          background-color: ${bgColor};
          color: ${color};
          user-select: none;
          border: 0;
          cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
          transition: ${theme.layout.transitionAll};
        }
        div:first-of-type {
          border-top-left-radius: ${theme.layout.radius};
          border-top-right-radius: ${theme.layout.radius};
        }
        div:last-of-type {
          border-bottom-left-radius: ${theme.layout.radius};
          border-bottom-right-radius: ${theme.layout.radius};
        }
        div:hover {
          background-color: ${theme.color.selectedBackground};
        }
      `}</style>
    </>
  )
})
