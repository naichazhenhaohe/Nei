export const getColors = (type, theme) => {
  const colors = {
    default: theme.color.background,
    primary: theme.color.primary,
    success: theme.color.success,
    warning: theme.color.warning,
    error: theme.color.danger,
    dark: theme.color.black,
    lite: theme.color.white
  }

  if (!Object.keys(colors).includes(type)) {
    type = 'default'
  }

  const color = type === 'lite' || type === 'default' ? theme.color.black : theme.color.white

  return {
    color,
    bgColor: colors[type]
  }
}
