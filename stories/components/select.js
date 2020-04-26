import React from 'react'
import { Select, Button, Card, Isolator } from '../../src'

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
      <Card>
        <Select initValue="apple">
          <Option value="apple" disabled>
            apple
          </Option>
          <Option value="banana">banana</Option>
        </Select>
      </Card>
      <Card>
        <Isolator>
          <Select initValue="apple" size="small">
            <Option value="apple">apple</Option>
            <Option value="banana">banana</Option>
          </Select>
          <Select initValue="apple">
            <Option value="apple">apple</Option>
            <Option value="banana">banana</Option>
          </Select>
          <Select initValue="apple" size="large">
            <Option value="apple">apple</Option>
            <Option value="banana">banana</Option>
          </Select>
        </Isolator>
      </Card>
    </div>
  )
}
