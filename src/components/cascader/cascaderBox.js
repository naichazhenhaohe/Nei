import React, { useState } from 'react'
import { useCascaderContext } from './cascaderContext'

const CascaderBox = React.memo(({ options, ...props }) => {
  const { value, currentValue, addValue } = useCascaderContext()
  const [current, setCurrent] = useState()
  console.log(value + '')
  const handleClick = (e, option) => {
    alert(option.label)
    setCurrent(option)
  }
  return (
    <>
      {options.map((option, index) => (
        <div className="option" key={index} onClick={e => handleClick(e, option)}>
          {option.label}
        </div>
      ))}
      {current && current.children && <CascaderBox options={current.children} />}
    </>
  )
})

export default CascaderBox
