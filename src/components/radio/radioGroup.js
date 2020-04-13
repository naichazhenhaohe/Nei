import React, { useState, useMemo, useEffect } from 'react'
import classNames from 'classnames'
import { RadioContext } from './radioContext'

export default React.memo(
  ({ disabled = false, onChange, value, children, className, initValue, ...props }) => {
    const prefixClass = 'nei-radioGroup'
    const radioGroupClass = classNames(prefixClass, className)
    const [selfValue, setSelfValue] = useState(initValue)

    const updateState = nextValue => {
      setSelfValue(nextValue)
      onChange && onChange(nextValue)
    }

    const providerValue = useMemo(() => {
      return {
        updateState,
        disabledAll: disabled,
        inGroup: true,
        value: selfValue
      }
    }, [disabled, selfValue])

    useEffect(() => {
      setSelfValue(value)
    }, [value])

    return (
      <RadioContext.Provider value={providerValue}>
        <div className={radioGroupClass} {...props}>
          {children}
        </div>
      </RadioContext.Provider>
    )
  }
)
