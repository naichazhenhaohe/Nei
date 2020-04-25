import React, { useEffect, useState } from 'react'

const createElement = id => {
  const element = document.createElement('div')
  element.setAttribute('id', id)
  return element
}

const useSelect = () => {
  const id = 'nei-portal-select'
  const [elementSnapshot, setElementSnapshot] = useState(createElement(id))
  useEffect(() => {
    const elementExist = document.querySelector(`#${id}`)
    const element = elementExist || createElement(id)
    if (!elementExist) {
      document.body.appendChild(element)
    }
    setElementSnapshot(element)
  }, [])
  return elementSnapshot
}

export default useSelect
