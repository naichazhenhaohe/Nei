import React from 'react'
import { Select, Button, Card } from '../../src'

export default function SelectStory() {
  const Option = Select.Option
  return (
    <div className="radio-demo narrow-card">
      <Card title="checked 属性">
        <Select placeholder="demo" clear onChange={value => console.log(value)}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
        </Select>
      </Card>
    </div>
  )
}
