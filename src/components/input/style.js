export const getColors = (type, theme) => {
  const colors = {
    default: {
      color: theme.color.text,
      borderColor: theme.color.border,
      focusBorderColor: theme.color.black
    },
    primary: {
      color: theme.color.text,
      borderColor: theme.color.primary,
      focusBorderColor: theme.color.primary
    },
    success: {
      color: theme.color.text,
      borderColor: theme.color.success,
      focusBorderColor: theme.color.success
    },
    warning: {
      color: theme.color.text,
      borderColor: theme.color.warning,
      focusBorderColor: theme.color.warning
    },
    error: {
      color: theme.color.text,
      borderColor: theme.color.danger,
      focusBorderColor: theme.color.danger
    }
  }

  if (!type) return colors.default
  return colors[type] || colors.default
}

export const getSizes = (size, theme) => {
  const sizes = {
    small: {
      fontSize: theme.layout.fontSize,
      height: `calc(${theme.layout.gap} * 1.2)`
    },
    default: {
      fontSize: theme.layout.fontSize,
      height: `calc(${theme.layout.gap} * 1.5)`
    },
    large: {
      fontSize: theme.layout.fontSizeLarge,
      height: `calc(${theme.layout.gap} * 1.8)`
    }
  }

  return sizes[size] || sizes.default
}
