import React from 'react'

const defaultContext = {
  value: [],
  currentValue: {},
  addValue: () => {}
}

export const CascaderContext = React.createContext(defaultContext)
export const useCascaderContext = () => React.useContext(CascaderContext)
