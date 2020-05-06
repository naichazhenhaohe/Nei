import React from 'react'
import useTheme from '../_style/useTheme'
import ThemeContext from '../_style/useTheme/themeContext'

const isObject = target => target && typeof target === 'object'

const deepMerge = (source, target) => {
  if (!isObject(target) || !isObject(source)) return source

  const sourceKeys = Object.keys(source)
  let result = {}

  for (const key of sourceKeys) {
    const sourceValue = source[key]
    const targetValue = target[key]
    if (Array.isArray(sourceValue) && Array.isArray(targetValue)) {
      result[key] = targetValue.concat(sourceValue)
    } else if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepMerge(sourceValue, { ...targetValue })
    } else if (targetValue) {
      result[key] = targetValue
    } else {
      result[key] = sourceValue
    }
  }

  return result
}

const mergeTheme = (current, custom) => {
  if (!custom) return current
  return deepMerge(current, custom)
}

const ThemeProvider = ({ children, theme }) => {
  const customTheme = theme
  const currentTheme = useTheme()
  const mergedTheme = mergeTheme(currentTheme, customTheme)
  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}
