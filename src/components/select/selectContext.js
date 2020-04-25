import React from 'react'

const defaultContext = {
  visible: false,
  size: 'medium',
  disableAll: false
}

export const SelectContext = React.createContext(defaultContext)
export const useSelectContext = () => React.useContext(SelectContext)
