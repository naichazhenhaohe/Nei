export const getSize = (size = 'default', theme) => {
  const sizes = {
    small: {
      size: `calc(1.2 * ${theme.layout.gap})`,
      fontSize: theme.layout.fontSizeSmall
    },
    default: {
      size: `calc(1.5 * ${theme.layout.gap})`,
      fontSize: theme.layout.fontSize
    },
    large: {
      size: `calc(2 * ${theme.layout.gap})`,
      fontSize: theme.layout.fontSizeLarge
    }
  }
  return sizes[size]
}

