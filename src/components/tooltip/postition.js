export const defaultPosition = {
  top: '-1000px',
  left: '-1000px',
  transform: 'none'
}

export const getPosition = (placement, node, offset) => {
  const positions = {
    top: {
      top: `${node.top - offset}px`,
      left: `${node.left + node.width / 2}px`,
      transform: 'translate(-50%, -100%)'
    },
    topLeft: {
      top: `${node.top - offset}px`,
      left: `${node.left}px`,
      transform: 'translate(0, -100%)'
    },
    topRight: {
      top: `${node.top - offset}px`,
      left: `${node.left + node.width}px`,
      transform: 'translate(-100%, -100%)'
    },
    bottom: {
      top: `${node.bottom + offset}px`,
      left: `${node.left + node.width / 2}px`,
      transform: 'translate(-50%, 0)'
    },
    bottomLeft: {
      top: `${node.bottom + offset}px`,
      left: `${node.left}px`,
      transform: 'translate(0, 0)'
    },
    bottomRight: {
      top: `${node.bottom + offset}px`,
      left: `${node.left + node.width}px`,
      transform: 'translate(-100%, 0)'
    },
    left: {
      top: `${node.top + node.height / 2}px`,
      left: `${node.left - offset}px`,
      transform: 'translate(-100%, -50%)'
    },
    leftTop: {
      top: `${node.top}px`,
      left: `${node.left - offset}px`,
      transform: 'translate(-100%, 0)'
    },
    leftBottom: {
      top: `${node.top + node.height}px`,
      left: `${node.left - offset}px`,
      transform: 'translate(-100%, -100%)'
    },
    right: {
      top: `${node.top + node.height / 2}px`,
      left: `${node.right + offset}px`,
      transform: 'translate(0, -50%)'
    },
    rightTop: {
      top: `${node.top}px`,
      left: `${node.right + offset}px`,
      transform: 'translate(0, 0)'
    },
    rightBottom: {
      top: `${node.top + node.height}px`,
      left: `${node.right + offset}px`,
      transform: 'translate(0, -100%)'
    }
  }
  return positions[placement] || positions.top
}

export const getArrowPosition = (placement, offset) => {
  const positions = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: `3px`,
      transform: 'translate(-50%, 100%) rotate(-90deg)'
    },
    topLeft: {
      top: 'auto',
      right: 'auto',
      left: '5%',
      bottom: `3px`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    topRight: {
      top: 'auto',
      right: '5%',
      left: 'auto',
      bottom: `3px`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    bottom: {
      top: `3px`,
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -100%) rotate(90deg)'
    },
    bottomLeft: {
      top: `3px`,
      right: 'auto',
      left: '5%',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    bottomRight: {
      top: `3px`,
      right: '5%',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    left: {
      top: '50%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftTop: {
      top: '10%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, 0) rotate(180deg)'
    },
    leftBottom: {
      top: 'auto',
      right: '0',
      left: 'auto',
      bottom: '10%',
      transform: 'translate(100%, 0) rotate(180deg)'
    },
    right: {
      top: '50%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightTop: {
      top: '10%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, 0) rotate(0deg)'
    },
    rightBottom: {
      top: 'auto',
      right: 'auto',
      left: '0',
      bottom: '10%',
      transform: 'translate(-100%, 0) rotate(0deg)'
    }
  }

  return positions[placement] || positions.top
}
