import React, { useState } from 'react'
import { useCascaderContext } from './cascaderContext'
import useTheme from '../_style/useTheme'

const CascaderBox = React.memo(({ options, level, ...props }) => {
  const { value, setValue, onChange } = useCascaderContext()
  const [selectedItem, setSelectedItem] = useState()
  const theme = useTheme()

  const handleClick = (e, option) => {
    if (option.disabled) return
    if (value.map(item => item.value).includes(option.value)) return
    setSelectedItem(option.value)
    const selectedCopy = JSON.parse(JSON.stringify(value))
    selectedCopy[level] = option
    selectedCopy.splice(level + 1)
    setValue(selectedCopy)
    onChange && onChange(selectedCopy)
  }

  return (
    <div className="nei-cascader-option-box">
      <div className="nei-cascader-option-section">
        {options.map((option, index) => (
          <div
            className={`nei-cascader-option ${option.value === selectedItem ? 'nei-cascader-selected-option' : ''}${
              option.disabled ? ' nei-cascader-disabled-option' : ''
            }`}
            key={index}
            onClick={e => handleClick(e, option)}
          >
            {option.label}
          </div>
        ))}
      </div>
      {value[level] && value[level].children && <CascaderBox level={level + 1} options={value[level].children} />}
      <style jsx>{`
        .nei-cascader-option-box {
          display: flex;
          height: 100%;
        }
        .nei-cascader-option-section {
          max-width: 150px;
          min-width: 100px;
          border-left: ${level !== 0 ? `1px solid ${theme.color.border}` : 'none'};
          padding: 5px 0;
          overflow: auto;
        }
        .nei-cascader-option {
          padding: ${`${theme.layout.quarterGap} ${theme.layout.halfGap}`};
          text-align: center;
          font-size: ${theme.layout.fontSize};
          transition: ${theme.layout.transitionAll};
        }
        .nei-cascader-option:hover {
          background: ${theme.color.selectedBackground};
          cursor: pointer;
        }
        .nei-cascader-selected-option {
          background: ${theme.color.selectedBackground};
          font-weight: 600;
        }
        .nei-cascader-disabled-option,
        .nei-cascader-disabled-option:hover {
          background: ${theme.color.disabledColor};
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
})

export default CascaderBox
