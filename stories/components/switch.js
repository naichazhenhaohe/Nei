import React, { useState } from 'react'
import { Switch, Button, Card } from '../../src'

export default function SwitchStory() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="radio-demo narrow-card">
      <Card title="checked 属性">
        <div>Boolean, 用于控制当前开关是否开启</div>
        <Switch checked={isChecked} />
        <br />
        <Button onClick={() => setIsChecked(!isChecked)}>click</Button>
      </Card>
      <Card title="disabled 属性">
        <div>Boolean, 默认为false, 用于控制当前开关是否可用</div>
        <Switch disabled />
        <Switch checked disabled/>
      </Card>
      <Card title="onChange 属性">
        <div>{`(event)=>{}`}, 开关状态变化事件</div>
        <Switch onChange={e => alert('switch clicked')} />
      </Card>
    </div>
  )
}
