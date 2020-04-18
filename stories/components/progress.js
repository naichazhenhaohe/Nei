import React, { useState } from 'react'
import { Progress, Card, Isolator, Button } from '../../src'

export default function ButtonStory() {
  const customColors = {
    20: '#000',
    40: '#0070f3',
    60: '#666',
    80: '#f5a623',
    100: '#f00'
  }
  const [value, setValue] = useState(10)
  return (
    <div className="btn-demo narrow-card">
      <Card title="value & max">
        <Isolator>
          <span>value, number, 数值，默认0</span>
          <span>max, number, 进度条最大值， 默认100</span>
          <Progress value={25} max="50" />
        </Isolator>
      </Card>
      <Card title="type">
        <Isolator>
          <span>sting, 默认为'default', 还可为'secondary', 'success', 'warning', 'error'</span>
          <Progress value={20} />
          <Progress type="secondary" value={40} />
          <Progress type="success" value={60} />
          <Progress type="warning" value={80} />
          <Progress type="error" value={100} />
        </Isolator>
      </Card>
      <Card title="colors">
        <Isolator>
          <span>自定义颜色，Object/String。优先级高于 type 属性。</span>
          <span>值可为Stirng。</span>
          <Progress value={50} colors="blue" type="success" />
          <span>还可为对象，用于依据进度条的进度改变颜色</span>
          <Progress value={value} colors={customColors} />
          <Isolator direction="horizontal">
            <Button
              onClick={() => {
                setValue(value + 20)
              }}
            >
              add 20
            </Button>
            <Button
              onClick={() => {
                setValue(10)
              }}
            >
              reset
            </Button>
          </Isolator>
        </Isolator>
      </Card>
    </div>
  )
}
