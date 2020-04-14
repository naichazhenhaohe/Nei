import React, { useState } from 'react'
import { Tag, Card, Isolator } from '../../src'

export default function tagStory() {
  return (
    <div className="radio-demo narrow-card">
      <Card title="type 属性">
        <Isolator>
          String, 默认为default
          <Tag>default</Tag>
          <Tag type="success">success</Tag>
          <Tag type="warning">warning</Tag>
          <Tag type="error">error</Tag>
          <Tag type="secondary">secondary</Tag>
          <Tag type="lite">lite</Tag>
        </Isolator>
      </Card>
      <Card title="color 属性">
        <Isolator>
          <span>String, 为 tag 指定颜色</span>
          <span>color 和 type 属性同时存在时，遵循 color 属性</span>
          <Tag color="red">red</Tag>
          <Tag color="#00eeff">#00eeff</Tag>
          <Tag color="#ffeb3b">#ffeb3b</Tag>
          <Tag color="#795548">#795548</Tag>
        </Isolator>
      </Card>
    </div>
  )
}
