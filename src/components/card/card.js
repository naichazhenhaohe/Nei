import React from 'react'
import classNames from 'classnames'
import Header from './header'
import Body from './body'
import useTheme from '../_style/useTheme'

export default React.memo(
  ({
    title,
    bordered = true,
    className,
    bodyClassName,
    hoverable = false,
    children,
    size = 'default',
    ...others
  }) => {
    const theme = useTheme()
    const prefixClass = 'nei-card'
    const cardClass = classNames(prefixClass, className, {
      [`${prefixClass}-bordered`]: bordered
    })
    return (
      <div className={cardClass} {...others}>
        <Header title={title} theme={theme} size={size} />
        <Body theme={theme} className={bodyClassName} size={size}>
          {children}
        </Body>
        <style jsx>{`
          .nei-card {
            box-sizing: border-box;
            padding: 0;
            color: ${theme.color.text};
            font-size: ${theme.layout.fontSize};
            list-style: none;
            position: relative;
            background: ${theme.color.background};
            border-radius: ${theme.layout.radius};
            transition: ${theme.layout.transitionAll};
            border: ${bordered ? `1px solid ${theme.color.border}` : 'none'};
          }
          .nei-card:hover {
            box-shadow: ${hoverable ? theme.color.boxShadow : ''};
          }
        `}</style>
      </div>
    )
  }
)
