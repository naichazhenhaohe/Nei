const getGhostColors = (type, theme) => {
  const colors = {
    default: {
      color: theme.color.text,
      boxShadow: 'none',
      border: `1px solid ${theme.color.white}`,
      background: 'transparent'
    },
    primary: {
      color: theme.color.primary,
      boxShadow: 'none',
      border: `1px solid ${theme.color.primary}`,
      background: 'transparent'
    },
    success: {
      color: theme.color.success,
      boxShadow: 'none',
      border: `1px solid ${theme.color.success}`,
      background: 'transparent'
    },
    warning: {
      color: theme.color.warning,
      boxShadow: 'none',
      border: `1px solid ${theme.color.warning}`,
      background: 'transparent'
    }
  }
  return colors[type] || null
}

export const getHoveredColors = (type, danger, ghost, theme) => {
  const colors = {
    default: {
      color: theme.color.text,
      border: `1px solid ${theme.color.black}`,
      bg: theme.color.background,
      boxShadow: theme.color.btnShadow
    },
    primary: {
      color: theme.color.primary,
      border: `1px solid ${theme.color.primary}`,
      bg: theme.color.background,
      boxShadow: 'none'
    },
    success: {
      color: theme.color.success,
      border: `1px solid ${theme.color.success}`,
      bg: theme.color.background,
      boxShadow: 'none'
    },
    warning: {
      color: theme.color.warning,
      border: `1px solid ${theme.color.warning}`,
      bg: theme.color.background,
      boxShadow: 'none'
    }
  }
  const ghostColors = {
    default: {
      color: theme.color.primary,
      border: `1px solid ${theme.color.primary}`,
      bg: theme.color.background,
      boxShadow: theme.color.btnShadow
    },
    primary: {
      color: theme.color.white,
      border: `1px solid ${theme.color.primary}`,
      bg: theme.color.primary,
      boxShadow: 'none'
    },
    success: {
      color: theme.color.white,
      border: `1px solid ${theme.color.success}`,
      bg: theme.color.success,
      boxShadow: 'none'
    },
    warning: {
      color: theme.color.white,
      border: `1px solid ${theme.color.warning}`,
      bg: theme.color.warning,
      boxShadow: 'none'
    }
  }

  const noHoverStyle = { color: '', border: '', bg: '', boxShadow: '' }

  if (danger) return noHoverStyle
  if (ghost) return ghostColors[type] || noHoverStyle

  return colors[type] || noHoverStyle
}

export const getBtnColors = (danger, ghost, type, theme) => {
  const colors = {
    default: {
      color: theme.color.text,
      boxShadow: theme.color.btnShadow,
      border: `1px solid ${theme.color.border}`,
      background: theme.color.background
    },
    primary: {
      color: theme.color.white,
      boxShadow: theme.color.btnShadow,
      border: `1px solid ${theme.color.primary}`,
      background: theme.color.primary
    },
    success: {
      color: theme.color.white,
      boxShadow: theme.color.btnShadow,
      border: `1px solid ${theme.color.success}`,
      background: theme.color.success
    },
    warning: {
      color: theme.color.white,
      boxShadow: theme.color.btnShadow,
      border: `1px solid ${theme.color.warning}`,
      background: theme.color.warning
    },
    link: {
      color: theme.color.primary,
      boxShadow: 'none',
      border: `transparent`,
      background: 'transparent'
    }
  }
  if (danger) {
    return type === 'link'
      ? {
          color: theme.color.danger,
          boxShadow: 'none',
          border: 'transparent',
          background: 'transparent'
        }
      : {
          color: '#fff',
          background: theme.color.danger,
          border: `1px solid ${theme.color.danger}`,
          boxShadow: 'transparent'
        }
  }
  if (ghost) {
    return getGhostColors(type, theme) || colors['default']
  }
  return colors[type] || colors['default']
}

export const getBtnSizes = (size, theme) => {
  const sizes = {
    small: {
      height: '24px',
      fontSize: theme.layout.fontSize,
      padding: `0 ${theme.layout.halfGap}`
    },
    default: {
      height: '32px',
      fontSize: theme.layout.fontSize,
      padding: `${theme.layout.quarterGap} ${theme.layout.halfGap}`
    },
    large: {
      height: '40px',
      fontSize: theme.layout.fontSizeLarge,
      padding: `${theme.layout.quarterGap} ${theme.layout.halfGap}`
    }
  }
  return sizes[size]
}
