import React from 'react'

const defaultContext = {
  value: [],
  setValue: () => {}
}

export const CascaderContext = React.createContext(defaultContext)
export const useCascaderContext = () => React.useContext(CascaderContext)
