import React, { useState, useCallback, useMemo, useRef } from 'react'
import classNames from 'classnames'
import { CascaderContext } from './cascaderContext'
import useTheme from '../_style/useTheme'
import CascadeIcon from './cascaderIcon'
import CascaderBox from './cascaderBox'
import useClickElsewhere from '../_util/useClickElsewhere'

export default React.memo(({ children, options, className, disabled, ...props }) => {
  const prefixClass = 'nei-cascader'
  const cascaderClass = classNames(prefixClass, className)
  const theme = useTheme()
  const ref = useRef(null)

  const [visible, setVisible] = useState(false)
  const [currentValue, setCurrentValue] = useState()
  const [value, setValue] = useState([])

  const stopPropagation = e => {
    console.log('?')
    e.stopPropagation()
  }

  const handleClick = useCallback(
    e => {
      console.log('clicked')
      e.preventDefault()
      stopPropagation(e)
      if (disabled) return
      setVisible(!visible)
    },
    [visible]
  )

  const addValue = next => {
    const tempValue = value.filter(item => {
      item.value !== currentValue.value
    })
    setCurrentValue(next)
    setValue(tempValue.push(next))
  }

  const initValue = useMemo(
    () => ({
      value,
      currentValue,
      addValue
    }),
    [value, addValue]
  )

  useClickElsewhere(ref, () => setVisible(false))

  return (
    <CascaderContext.Provider value={initValue}>
      <div ref={ref} onClick={stopPropagation}>
        <details open={visible}>
          <summary onClick={handleClick}>
            {value}
            <div className={`${prefixClass}-icon`}>
              <CascadeIcon />
            </div>
          </summary>
          <CascaderBox options={options} />
        </details>
        <style jsx>{`
          summary {
            outline: none;
            box-sizing: border-box;
            color: rgb(102, 102, 102);
            background-color: rgb(255, 255, 255);
            height: 2.5rem;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto;
            list-style: none;
            outline: none;
            padding: 0px 1px;
            transition: background 0.2s ease 0s, border-color 0.2s ease 0s;
          }
          summary::-webkit-details-marker,
          summary::before {
            display: none;
          }
          .nei-cascader-icon {
            right: ${theme.layout.quarterGap};
            font-size: 0.875rem;
            transform: rotate(${visible ? '180' : '0'}deg);
            pointer-events: none;
            transition: transform 200ms ease;
            display: flex;
            align-items: center;
            color: #666;
          }
        `}</style>
      </div>
    </CascaderContext.Provider>
  )
})
