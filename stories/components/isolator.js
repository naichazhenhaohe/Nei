import React from 'react'
import { Button, Card, Isolator } from '../../src'

export default function CardStory() {
  return (
    <div className="isolator-demo narrow-card">
      <Card title="direction 属性">
        <div>direction 属性默认为 vertical</div>
        <Isolator>
          <Button>button - 1</Button>
          <Button>button - 2</Button>
        </Isolator>
        <Button>button - 1</Button>
          <Button>button - 2</Button>
        <div>值还可以是 horizontal</div>
        <Isolator direction="horizontal">
          <Button>button - 1</Button>
          <Button>button - 2</Button>
        </Isolator>
      </Card>

      <Card title="size 属性">
        <div>size 属性默认为 8 px，用于指定要分隔的节点的间距</div>
        <div>size值可以是 number</div>
        <Isolator direction="horizontal" size={16}>
          <Button>button - 1</Button>
          <Button>button - 2</Button>
        </Isolator>
        <div>size值也可以是 string</div>
        <Isolator direction="horizontal" size="24">
          <Button>button - 1</Button>
          <Button>button - 2</Button>
        </Isolator>
      </Card>
    </div>
  )
}
