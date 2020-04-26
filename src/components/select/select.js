import React, { useRef, useState, useMemo, useEffect } from 'react'
import classNames from 'classnames'
import { SelectContext } from './selectContext'
import SelectDropdown from './selectDropdown'
import useClickElsewhere from '../_util/useClickElsewhere'
import SelectIcon from './selectIcon'
import useTheme from '../_style/useTheme'

const pickChild = (children, value) => {
  let target = []
  React.Children.map(children, item => {
    if (item.props.value === value) {
      target.push(item)
    }
  })
  const targetChildren = target.length >= 0 ? target : undefined
  return targetChildren
}

const pickFirstChild = children => {
  return React.Children.toArray(children)[0]
}

const getSize = (theme, size = 'default') => {
  const sizes = {
    small: {
      height: `calc(1.344 * ${theme.layout.gap})`,
      fontSize: `calc(0.75 * ${theme.layout.fontSize})`,
      minWidth: `calc(8 * ${theme.layout.fontSize})`
    },
    default: {
      height: `calc(1.688 * ${theme.layout.gap})`,
      fontSize: `calc(0.875 * ${theme.layout.fontSize})`,
      minWidth: `calc(10 * ${theme.layout.fontSize})`
    },
    large: {
      height: `calc(2 * ${theme.layout.gap})`,
      fontSize: `calc(1.225 * ${theme.layout.fontSize})`,
      minWidth: `calc(12.5 * ${theme.layout.fontSize})`
    }
  }
  return sizes[size]
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
    size = 'default',
    clear = false,
    children,
    ...props
  }) => {
    const theme = useTheme()
    const targetSize = useMemo(() => getSize(theme, size), [theme, size])
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
      const optionChildren = pickChild(children, value)
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
            <span className={classNames(`${prefixClass}-placeholder`, `${prefixClass}-value`)}>
              {placeholder}
            </span>
          )}
          {value && <span className={`${prefixClass}-value`}>{selectedChild}</span>}
          <SelectDropdown visible={visible} className={dropdownClassName}>
            {children}
          </SelectDropdown>
          {!clear && (
            <div className={`${prefixClass}-icon`}>
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
              transition: ${theme.layout.transitionAll};
              border-width: 1px;
              border-style: solid;
              border-color: ${visible ? theme.color.primary : theme.color.border};
              border-radius: ${theme.layout.radius};
              padding-right: ${theme.layout.quarterGap};
              padding-left: ${theme.layout.halfGap};
              height: ${targetSize.height};
              min-width: ${targetSize.minWidth};
              background-color: ${disabled
                ? theme.color.disabledBackground
                : theme.color.background};
            }
            .nei-select:hover {
              border-color: ${disabled ? theme.color.border : theme.color.primary};
            }

            .nei-select:hover .nei-select-icon {
              color: ${disabled ? theme.color.disabledColor : theme.color.primary};
            }
            .nei-select-icon {
              position: absolute;
              right: ${theme.layout.quarterGap};
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
            .nei-select-value {
              display: inline-flex;
              flex: 1;
              height: 100%;
              align-items: center;
              line-height: 1;
              padding: 0;
              margin-right: 1.25rem;
              font-size: ${targetSize.fontSize};
              color: ${disabled ? theme.color.disabledColor : theme.color.selectedValue};
              width: calc(100% - 1.25rem);
            }
            .nei-select-value > :global(div),
            .nei-select-value > :global(div:hover) {
              border-radius: 0;
              background-color: transparent;
              padding: 0;
              margin: 0;
              color: inherit;
              font-size: inherit;
            }
            .nei-select-placeholder {
              color: ${theme.color.placeholder};
            }
          `}</style>
        </div>
      </SelectContext.Provider>
    )
  }
)
