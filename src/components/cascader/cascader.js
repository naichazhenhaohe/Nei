import React, { useState, useCallback, useMemo, useRef } from 'react'
import classNames from 'classnames'
import { CascaderContext } from './cascaderContext'
import useTheme from '../_style/useTheme'
import CascadeIcon from './cascaderIcon'
import CascaderBox from './cascaderBox'
import useClickElsewhere from '../_util/useClickElsewhere'
import { getSize } from './style'

export default React.memo(
  ({
    children,
    options,
    size: customSize = 'default',
    separator = '/',
    className,
    disabled,
    onChange = '',
    placeholder,
    ...props
  }) => {
    const prefixClass = 'nei-cascader'
    const cascaderClass = classNames(prefixClass, className)
    const theme = useTheme()
    const ref = useRef(null)
    const size = getSize(customSize, theme)

    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState([])

    const stopPropagation = e => {
      e.stopPropagation()
    }

    const handleClick = useCallback(
      e => {
        e.preventDefault()
        stopPropagation(e)
        if (disabled) return
        setVisible(!visible)
      },
      [visible]
    )

    const initValue = useMemo(
      () => ({
        value,
        setValue,
        onChange
      }),
      [value, onChange]
    )

    useClickElsewhere(ref, () => setVisible(false))

    return (
      <CascaderContext.Provider value={initValue}>
        <div className={cascaderClass} ref={ref} onClick={stopPropagation}>
          <input
            readOnly
            value={value.map(item => item.label).join(` ${separator} `)}
            onClick={handleClick}
            placeholder={placeholder}
          />
          <details open={visible}>
            <summary onClick={handleClick}>
              <div className={`${prefixClass}-icon`}>
                <CascadeIcon />
              </div>
            </summary>
            <div className="nei-cascader-options">
              <CascaderBox options={options} level={0} />
            </div>
          </details>
          <style jsx>{`
            input {
              margin: ${`${theme.layout.quarterGap} ${theme.layout.halfGap}`};
              padding: 0;
              box-shadow: none;
              font-size: ${size.fontSize};
              background-color: transparent;
              border: none;
              color: #000;
              outline: none;
              border-radius: ${theme.layout.radius};
              width: 100%;
              -webkit-appearance: none;
              cursor: ${disabled ? 'not-allowed' : 'pointer'};
            }
            .nei-cascader {
              display: inline-flex;
              position: relative;
              box-sizing: border-box;
              border: 1px solid ${theme.color.border};
              border-image: initial;
              border-radius: ${theme.layout.radius};
              background: ${disabled ? theme.color.disabledBackground : theme.color.background};
              cursor: ${disabled ? 'not-allowed' : 'pointer'};
            }
            summary {
              outline: none;
              box-sizing: border-box;
              color: rgb(102, 102, 102);
              background-color: ${disabled ? theme.color.disabledBackground : theme.color.background};
              height: ${size.size};
              width: ${size.size};
              border-top-right-radius: ${theme.layout.radius};
              border-bottom-right-radius: ${theme.layout.radius};
              cursor: ${disabled ? 'not-allowed' : 'pointer'};
              display: flex;
              justify-content: center;
              align-items: center;
              list-style: none;
              transition: ${theme.layout.transitionAll};
            }
            summary::-webkit-details-marker,
            summary::before {
              display: none;
            }
            .nei-cascader-icon {
              transform: rotate(${visible ? '180' : '0'}deg);
              pointer-events: none;
              transition: ${theme.layout.transitionAll};
              display: flex;
              align-items: center;
              color: ${theme.color.text};
            }
            .nei-cascader-options {
              position: absolute;
              left: 0;
              margin-top: 1vh;
              z-index: 1;
              box-shadow: ${theme.color.boxShadow};
              background: ${theme.color.background};
              height: 200px;
              border-radius: ${theme.layout.radius};
              overflow: hidden;
            }
          `}</style>
        </div>
      </CascaderContext.Provider>
    )
  }
)
