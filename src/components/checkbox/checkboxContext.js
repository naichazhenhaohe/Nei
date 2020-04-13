import React from 'react'

const defaultContext = {
  disabledAll: false,
  updateState: () => {},
  inGroup: false,
  values: []
}

export const CheckboxContext = React.createContext(defaultContext)
export const useCheckbox = () => React.useContext(CheckboxContext)
