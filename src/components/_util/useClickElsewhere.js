import { useEffect } from 'react'

export default (ref, handler) => {
  useEffect(() => {
    const callback = event => {
      const element = ref.current
      if (!event || !element || element.contains(event.target)) return
      handler(event)
    }
    document.addEventListener('click', callback)
    return () => document.removeEventListener('click', callback)
  }, [ref, handler])
}
