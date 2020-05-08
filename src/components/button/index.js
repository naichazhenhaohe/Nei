import React from 'react'
import classNames from 'classnames'
import useTheme from '../_style/useTheme'

export default React.memo(
  ({ type, className, children, plusStyle, onClick, danger, disabled, ghost, ...others }) => {
    const prefixClass = 'nei-btn'
    const theme = useTheme()
    const handleClick = e => {
      onClick && onClick(e)
    }

    let btnClass = classNames(prefixClass, className, {
      [`${prefixClass}-${type}`]: type,
      [`${prefixClass}-danger`]: !!danger && type !== 'link',
      [`${prefixClass}-danger-link`]: !!danger && type === 'link',
      [`${prefixClass}-ghost`]: !!ghost
    })
    return (
      <button className={btnClass} onClick={handleClick} disabled={!!disabled} {...others}>
        {children}
        <style jsx>{`
          .nei-btn {
            position: relative;
            display: inline-block;
            border-radius: ${theme.layout.radius};
            border: 1px solid transparent;
            text-align: center;
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
            cursor: pointer;
            transition: ${theme.layout.transitionAll};
            user-select: none;
            height: 32px;
            padding: ${`${theme.layout.quarterGap} ${theme.layout.halfGap}`};
            background: ${theme.color.background};
            color: ${theme.color.text};
            white-space: nowrap;
            border-color: ${theme.color.border};
            outline: 0;
          }
          .nei-btn:active,
          .nei-btn:focus {
          }
          .nei-btn[disabled] {
            cursor: not-allowed;
            color: ${theme.color.disabledColor};
            background-color: ${theme.color.disabledBackground};
            border-color: ${theme.color.border};
            text-shadow: none;
            box-shadow: none;
          }
          .nei-btn-primary {
            color: ${theme.color.background};
            background-color: ${theme.color.primary};
            text-shadow: ${theme.color.textShadow};
          }

          .nei-btn-link {
            background: transparent;
            border: transparent;
            box-shadow: none;
            color: ${theme.color.link};
          }

          .nei-btn-link[disabled] {
            background-color: transparent;
          }

          .nei-btn-danger {
            color: #fff;
            background-color: ${theme.color.danger};
            border-color: ${theme.color.danger};
          }

          .nei-btn-danger-link {
            color: ${theme.color.danger};
          }
        `}</style>
        <style jsx>{`
          ${plusStyle ? plusStyle : ''}
        `}</style>
      </button>
    )
  }
)
