import React from 'react'

export default () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.25em"
      height="1.25em"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <path d="M6 9l6 6 6-6" />
      <style jsx>{`
        svg {
          color: inherit;
          stroke: currentColor;
          transition: all 200ms ease;
        }
      `}</style>
    </svg>
  )
}
