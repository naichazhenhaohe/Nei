export const getColor = (type, customColor, theme) => {
  const colors = {
    default: {
      color: theme.color.text
    },
    success: {
      color: theme.color.success
    },
    warning: {
      color: theme.color.warning
    },
    error: {
      color: theme.color.danger
    },
    dark: {
      color: theme.color.black,
      bgColor: theme.color.background
    },
    lite: {
      color: theme.color.text,
      bgColor: theme.color.border
    }
  }

  const typeStyle = colors[type] ? colors[type] : colors['default']

  const hideBorder = type === 'lite'
  const style = {
    ...colors[type],
    bgColor: typeStyle.bgColor || '#fff',
    borderColor: hideBorder ? 'transparent' : typeStyle.color
  }
  return customColor === undefined ? style : { color: '#fff', bgColor: customColor, borderColor: customColor }
}
