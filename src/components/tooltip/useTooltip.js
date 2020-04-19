import React, { useEffect, useState } from 'react'

const createElement = id => {
  const element = document.createElement('div')
  element.setAttribute('id', id)
  return element
}

const useTooltip = () => {
  const id = 'nei-portal-tooltip'
  const [elementSnapshot, setElementSnapshot] = useState(createElement(id))
  useEffect(() => {
    const elementExist = document.querySelector(`#${id}`)
    const element = elementExist || createElement(id)
    if (!elementExist) {
      document.body.appendChild(element)
    }
    console.log('el', element)
    setElementSnapshot(element)
  }, [])
  return elementSnapshot
}

export default useTooltip
