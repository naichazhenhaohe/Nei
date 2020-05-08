import React, { useState, useCallback, useMemo, useRef } from 'react'
import classNames from 'classnames'
import { CascaderContext } from './cascaderContext'
import useTheme from '../_style/useTheme'
import CascadeIcon from './cascaderIcon'
import CascaderBox from './cascaderBox'
import useClickElsewhere from '../_util/useClickElsewhere'

export default React.memo(({ children, options, className, disabled, ...props }) => {
  // const prefixClass = 'nei-cascader'
  // const cascaderClass = classNames(prefixClass, className)
  // const theme = useTheme()
  // const ref = useRef(null)

  const [visible, setVisible] = useState(false)
  // const [currentValue, setCurrentValue] = useState()
  // const [value, setValue] = useState([])

  // // const stopPropagation = e => {
  // //   console.log('???')
  // // }

  // const handleClick = useCallback(
  //   e => {
  //     e.preventDefault()
  //     stopPropagation(e)
  //     if (disabled) return
  //     setVisible(!visible)
  //   },
  //   [visible]
  // )

  // function stopPropagation(e) {
  //   e.preventDefault()
  //   console.log('The link was clicked.')
  // }

  // const addValue = next => {
  //   const tempValue = value.filter(item => {
  //     item.value !== currentValue.value
  //   })
  //   setCurrentValue(next)
  //   setValue(tempValue.push(next))
  // }

  // const initValue = useMemo(
  //   () => ({
  //     value,
  //     currentValue,
  //     addValue
  //   }),
  //   [value, addValue]
  // )

  // useClickElsewhere(ref, () => setVisible(false))

  return (
    // <CascaderContext.Provider value={initValue}>
    <div onClick={console.log('???')}>
      {'' + visible}
      {/* <details open={visible}>
          <summary onClick={handleClick}>
            {value}
            <CascadeIcon />
          </summary>
          <CascaderBox options={options} />
        </details>
        <style jsx>{`
          summary {
            outline: none;
          }
        `}</style> */}
    </div>
    // </CascaderContext.Provider>
  )
})
