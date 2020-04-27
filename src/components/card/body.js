import React from 'react'

export default React.memo(({ children, theme, className = '', size }) => {
  return (
    <div className={'nei-card-body ' + className}>
      {children}
      <style jsx>{`
        .nei-card-body {
          padding: ${size === 'small' ? theme.layout.halfGap : theme.layout.gap};
        }
      `}</style>
    </div>
  )
})
