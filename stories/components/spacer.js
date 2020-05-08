import React from 'react'
import { Button, Card, Spacer } from '../../src'

export default function SelectStory() {
  return (
    <div className="spacer-demo narrow-card">
      <Card title="checked 属性">
        <Button>btn 1</Button>

        <Spacer isInline x={5} />
        
        <Button>btn 2</Button>
        <Spacer isInline x={3} />
        <Button>btn 3</Button>
      </Card>
      <Card title="checked 属性">
        <Button>btn 1</Button>
        <Spacer y={1} />
        <Button>btn 2</Button>
        <Spacer y={2} />
        <Button>btn 3</Button>
      </Card>
    </div>
  )
}
