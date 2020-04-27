import React from 'react'

export default React.memo(({ title, theme, size }) => {
  if (typeof title === 'undefined') return null
  return (
    <div className="nei-card-header">
      <div className="nei-card-header-title">{title}</div>
      <style jsx>{`
        .nei-card-header {
          display: flex;
          align-items: center;
          min-height: 48px;
          margin-bottom: -1px;
          padding: 0 ${size === 'small' ? theme.layout.halfGap : theme.layout.gap};
          color: ${theme.color.header};
          font-weight: 500;
          font-size: ${size === 'small' ? theme.layout.fontSize : theme.layout.fontSizeLarge};
          background: transparent;
          border-bottom: 1px solid ${theme.color.border};
          border-radius: ${`${theme.layout.radius} ${theme.layout.radius} 0 0`};
        }
        .nei-card-header-title {
          display: inline-block;
          flex: 1;
          padding: ${`${size === 'small' ? theme.layout.halfGap : theme.layout.gap} 0`};
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  )
})
