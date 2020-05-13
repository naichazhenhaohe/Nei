import React, { useCallback, useMemo } from 'react'
import classNames from 'classnames'
import useTheme from '../_style/useTheme'
import { getBtnColors, getBtnSizes, getHoveredColors } from './style'

export default React.memo(
  ({
    type = 'default',
    size = 'default',
    className,
    children,
    onClick,
    danger = false,
    disabled,
    ghost = false,
    ...others
  }) => {
    const prefixClass = 'nei-btn'
    const theme = useTheme()
    const { border, boxShadow, background, color } = useMemo(
      () => getBtnColors(danger, ghost, type, theme),
      [danger, ghost, type, theme]
    )
    const sizes = useMemo(() => getBtnSizes(size, theme), [size, theme])
    const hoveredColor = useMemo(() => getHoveredColors(type, danger, ghost, theme), [
      type,
      danger,
      ghost,
      theme
    ])
    const handleClick = useCallback(
      e => {
        onClick && onClick(e)
      },
      [onClick]
    )

    let btnClass = classNames(prefixClass, className)

    return (
      <button className={btnClass} onClick={handleClick} disabled={!!disabled} {...others}>
        {children}
        <style jsx>{`
          .nei-btn {
            position: relative;
            display: inline-block;
            border-radius: ${theme.layout.radius};
            border: ${border};
            text-align: center;
            box-shadow: ${boxShadow};
            cursor: pointer;
            transition: ${theme.layout.transitionAll};
            user-select: none;
            height: ${sizes.height};
            padding: ${sizes.padding};
            background: ${background};
            color: ${color};
            white-space: nowrap;
            outline: 0;
            font-size: ${sizes.fontSize};
          }
          .nei-btn:active,
          .nei-btn:hover,
          .nei-btn:focus {
            color: ${hoveredColor.color};
            background: ${hoveredColor.bg};
            border: ${hoveredColor.border};
            box-shadow: ${hoveredColor.boxShadow};
          }
          .nei-btn[disabled] {
            cursor: not-allowed;
            color: ${theme.color.disabledColor};
            background-color: ${type === 'link' ? theme.color.disabledBackground : 'transparent'};
            border-color: ${theme.color.border};
            text-shadow: none;
            box-shadow: none;
          }
        `}</style>
      </button>
    )
  }
)
