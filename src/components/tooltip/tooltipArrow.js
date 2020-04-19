import React, { useMemo } from 'react'
import { getArrowPosition } from './postition'
export default React.memo(({ placement, bgColor }) => {
  const { transform, top, left, right, bottom } = useMemo(() => getArrowPosition(placement), [
    placement
  ])
  return (
    <span>
      <style jsx>{`
        span {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 7px 6px 0;
          border-color: ${`transparent ${bgColor} transparent transparent`};
          position: absolute;
          left: ${left};
          top: ${top};
          right: ${right};
          bottom: ${bottom};
          transform: ${transform};
        }
      `}</style>
    </span>
  )
})
