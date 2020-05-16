import { useState } from 'react'

const useInput = (initValue, onChange) => {
  const [state, setState] = useState(initValue)

  const defaultFunction = event => {
    onChange && onChange(event)
    setState(event.target.value)
  }

  return {
    state,
    setState,
    attrs: {
      value: state,
      onChange: defaultFunction
    }
  }
}

export default useInput
