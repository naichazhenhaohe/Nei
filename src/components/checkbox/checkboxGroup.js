import React, { useState, useMemo, useEffect } from 'react'
import classNames from 'classnames'
import { CheckboxContext } from './checkboxContext'

export default React.memo(
  ({ disabled = false, onChange, value = [], children, className, ...props }) => {
    const prefixClass = 'nei-checkbox-group'
    const checkboxGroupClass = classNames(prefixClass, className)
    const [selfValue, setSelfValue] = useState([])

    const updateState = (value, checked) => {
      const removed = selfValue.filter(v => v !== value)
      const next = checked ? [...removed, value] : removed
      setSelfValue(next)
      onChange && onChange(next)
    }

    const providerValue = useMemo(() => {
      return {
        updateState,
        disabledAll: disabled,
        inGroup: true,
        values: selfValue
      }
    }, [disabled, selfValue])

    useEffect(() => {
      setSelfValue(value)
    }, [value.join(',')])

    return (
      <CheckboxContext.Provider value={providerValue}>
        <div className={checkboxGroupClass} {...props}>
          {children}
        </div>
      </CheckboxContext.Provider>
    )
  }
)
