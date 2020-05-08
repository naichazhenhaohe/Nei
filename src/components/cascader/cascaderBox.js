import React from 'react'
import { useCascaderContext } from './cascaderContext'

const CascaderBox = React.memo(({ options, ...props }) => {
  // const { value, currentValue, addValue } = useCascaderContext()
  const handleClick = e => {
    console.log('???')
  }
  const current = {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
  return (
    <>
      {options.map((option, index) => (
        <div className="option" key={index} onClick={handleClick}>
          {option.label}...
        </div>
      ))}
      {/* {current.children <CascaderBox options={current.children} />} */}
    </>
  )
})

export default CascaderBox
