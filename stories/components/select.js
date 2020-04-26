import React from 'react'
import { Select, Button, Card } from '../../src'

export default function SelectStory() {
  const Option = Select.Option
  return (
    <div className="radio-demo narrow-card">
      <Card title="checked 属性">
        <Select placeholder="demo" onChange={value => console.log(value)}>
        <Option value="apple">apple</Option>
          <Option value="banana">banana</Option>
        </Select>
      </Card>
      <Card>
        <Select initValue="apple" disabled>
          <Option value="apple">apple</Option>
          <Option value="banana">banana</Option>
        </Select>
      </Card>
    </div>
  )
}
