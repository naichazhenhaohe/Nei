import React, { useState } from 'react'
import { Checkbox, Card, Button } from '../../src'

export default function CardStory() {
  const Group = Checkbox.Group
  const [checked, setChecked] = useState(false)

  const handleBtnClick = e => {
    setChecked(!checked)
  }

  return (
    <div className="checkbox-demo narrow-card">
      <Card title="checked 属性">
        <Checkbox checked={checked}>Checkbox</Checkbox>
        <div>checked 属性用于修改当前复选框状态</div>
        <div>checked 属性值类型为 Boolean </div>
        <Button onClick={handleBtnClick}>点击更改复选框状态</Button>
      </Card>
      <Card title="initChecked 属性">
        <Checkbox initChecked>
          Checkbox
        </Checkbox>
        <div>initChecked 属性用于定义复选框初始状态</div>
        <div>同时设置 initChecked 和 checked 属性，复选框状态会遵从 checked 属性</div>
        <div>initChecked 属性值类型为 Boolean </div>
      </Card>
      <Card title="group">
        <div>Checkbox.Group组件的属性有 disabled, value 和 onChange </div>

        <div> disabled, Boolean，为true时禁用组内所有复选框</div>
        <div> value, Array{`<string>`}，组内选中的复选框的值</div>
        <div>
          onChange, {`(values: string[])=>{}`}，组内复选框变化时触发事件，参数为当前组内的值数组
        </div>
        
        <Group
          value={['apple']}
          onChange={values => {
            console.log(values)
          }}
        >
          <Checkbox value="apple">apple</Checkbox>
          <Checkbox value="orange">orange</Checkbox>
          <Checkbox value="banana">banana</Checkbox>
        </Group>
      </Card>
    </div>
  )
}
