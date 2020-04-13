import React from 'react'

const defaultContext = {
  disabledAll: false,
  updateState: () => {},
  inGroup: false
}

export const RadioContext = React.createContext(defaultContext)
export const useRadioContext = () => React.useContext(RadioContext)
