import React, { useRef, useState, useMemo, useEffect } from 'react'
import classNames from 'classnames'
import { SelectContext } from './selectContext'
import SelectDropdown from './selectDropdown'
import useClickElsewhere from '../_util/useClickElsewhere'
import SelectIcon from './selectIcon'

const pickChild = (children, key, value) => {
  let target = []
  const widthoutPropChildren = React.Children.map(children, item => {
    if (!React.isValidElement(item)) return null
    if (!item.props) return item
    if (item.props[key] === value) {
      target.push(item)
      return null
    }
    return item
  })
  const targetChildren = target.length >= 0 ? target : undefined
  return [widthoutPropChildren, targetChildren]
}

const pickFirstChild = children => {
  return React.Children.toArray(children)[0]
}

export default React.memo(
  ({
    disabled = false,
    initValue: init,
    value: customValue,
    onChange,
    className,
    placeholder,
    dropdownClassName = '',
    size = 'medium',
    clear = false,
    children,
    ...props
  }) => {
    const prefixClass = 'nei-select'
    const selectClass = classNames(prefixClass, className)
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState(init)

    const updateVisible = visible => setVisible(visible)
    const updateValue = value => {
      setValue(value)
      onChange && onChange(value)
      setVisible(false)
    }

    const initValue = useMemo(
      () => ({
        value,
        visible,
        updateValue,
        updateVisible,
        size,
        ref,
        disabledAll: disabled
      }),
      [visible, size, disabled, ref]
    )

    useClickElsewhere(ref, () => setVisible(false))

    useEffect(() => {
      if (customValue === undefined) return
      setValue(customValue)
    }, [customValue])

    const handleClick = e => {
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
      e.preventDefault()
      if (disabled) return
      setVisible(!visible)
    }
    const selectedChild = useMemo(() => {
      const [, optionChildren] = pickChild(children, 'value', value)
      const child = pickFirstChild(optionChildren)
      if (!React.isValidElement(child)) return optionChildren
      /**
       * what is the second parameter for?
       */
      return React.cloneElement(child, { preventAllEvents: true })
    }, [value, children])

    return (
      <SelectContext.Provider value={initValue}>
        <div className={selectClass} ref={ref} onClick={handleClick} {...props}>
          {!value && (
            <span className={classNames('nei-select-placeholder', 'nei-select-value')}>
              {placeholder}
            </span>
          )}
          {value && <span className="nei-select-value">{selectedChild}</span>}
          <SelectDropdown visible={visible} className={dropdownClassName}>
            {children}
          </SelectDropdown>
          {!clear && (
            <div className="nei-select-icon">
              <SelectIcon />
            </div>
          )}
          <style jsx>{`
            .nei-select {
              display: inline-flex;
              align-items: center;
              user-select: none;
              white-space: nowrap;
              position: relative;
              cursor: ${disabled ? 'not-allowed' : 'pointer'};
              max-width: 80vw;
              width: initial;
              overflow: hidden;
              transition: border 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s;
              border: 1px solid #eaeaea;
              border-radius: 5px;
              padding: 0 4pt 0 8pt;
              height: calc(1.688 * 16pt);
              min-width: 10rem;
              background-color: ${disabled ? '#fafafa' : '#fff'};
            }
            .nei-select-icon {
              position: absolute;
              right: 4pt;
              font-size: 0.875rem;
              top: 50%;
              bottom: 0;
              transform: translateY(-50%) rotate(${visible ? '180' : '0'}deg);
              pointer-events: none;
              transition: transform 200ms ease;
              display: flex;
              align-items: center;
              color: #666;
            }
          `}</style>
        </div>
      </SelectContext.Provider>
    )
  }
)
