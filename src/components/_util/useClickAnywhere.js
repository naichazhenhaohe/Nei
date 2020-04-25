import { useEffect } from 'react'

export default handler => {
  useEffect(() => {
    const callback = e => handler(e)
    document.addEventListener('click', callback)
    return () => document.removeEventListener('click', callback)
  }, [handler])
}
