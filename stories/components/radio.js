import React, { useState } from 'react'
import { Radio, Button, Card } from '../../src'

export default function CardStory() {
  const Group = Radio.Group
  const handleClick = () => {
    setIsChecked(!isChecked)
    console.log(isChecked)
  }
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="radio-demo narrow-card">
      <Card title="checked 属性">
        <div>checked, Boolean，用于指定当前单选框选中状态</div>
        <Radio checked={isChecked}>demo</Radio>
        <Button onClick={handleClick}>click</Button>
      </Card>
      <Card title="disabled 属性">
        <div>disabled, Boolean, 用于指定单选框是否可用</div>
        <Radio disabled checked>
          demo
        </Radio>
      </Card>
      <Card title="onChange 属性">
        <div>onChange, (event)=>{`{}`}, 选项变化事件</div>
        <Radio checked={false} onChange={() => alert('apple selected!')}>
          apple
        </Radio>
      </Card>
      <Card title="radio group">
        <div> value, string, 组中选中单选框的值</div>
        <div> disabled, boolean, 禁用组内所有单选框</div>
        <div> onChange, {'(value)=>{}'} 组的值变化事件</div>
        <Group value="apple">
          <Radio value="apple">apple</Radio>
          <Radio value="orange">orange</Radio>
          <Radio value="banana">banana</Radio>
        </Group>
      </Card>
      <Card title="radio group disabled">
        <Group value="apple" disabled>
          <Radio value="apple">apple</Radio>
          <Radio value="orange">orange</Radio>
          <Radio value="banana">banana</Radio>
        </Group>
      </Card>
    </div>
  )
}
