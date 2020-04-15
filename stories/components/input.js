import React, { useState } from 'react'
import { Card, Input, Isolator } from '../../src'

export default function InputStory() {
  const [value, setValue] = useState('')
  return (
    <div className="checkbox-demo narrow-card">
      <Card title="placeholder 属性">
        <Input placeholder="请输入" />
      </Card>
      <Card title="value & onChange 属性">
        <Isolator>
          <span>value, String, 用于指定当前输入框的值，于onChange联通可实现双向绑定</span>
          <span>onChange, {`(event)=>{}`}, 输入框值变动时触发事件</span>
          <Input value={value} onChange={e => setValue(e.target.value)} />
          {value}
        </Isolator>
      </Card>
      <Card title="disabled & readOnly">
        <Isolator>
          <Input disabled placeholder="disabled" />
          <Input readOnly value="readOnly" />
        </Isolator>
      </Card>
      <Card title="type 属性">
        <Isolator>
          <span>string, 默认为default, 还可为secondary/success/warning/error</span>
          <Input type="secondary" placeholder="secondary" />
          <Input type="success" placeholder="success" />
          <Input type="warning" placeholder="warning" />
          <Input type="error" placeholder="error" />
        </Isolator>
      </Card>
    </div>
  )
}
