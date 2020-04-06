import React from 'react'
import { Button, Card } from '../../src'

export default function CardStory() {
  const style_1 = `
  background-color: #d8ff00;
`
  const style_2 = `
  color: green;
`
  const redBackground = `background-color: #ffbed0`
  const blueBackground = `background-color: #bec6ff`
  const yellowBackground = `background-color: #fbffbe`
  return (
    <div className="card-demo narrow-card">
      <Card title="title 属性">
        <Card title="可以为字符串">标题为``</Card>
        <Card title={<span style={{ color: 'red' }}>也可以为自定义节点</span>} />
      </Card>

      <Card title="bordered 属性" plusStyle={{ body: redBackground }}>
        <p>默认为 true, 即存在边框</p>
        <Card title="无边框 Card" bordered={false}>
          <p>这里是无边框 Card 的内容</p>
        </Card>
      </Card>

      <Card title="plusStyle 属性">
        <div>每一个 Card 由 head 和 body 两部分组成</div>
        <div>因此 plusStyle 属性接受字符串和对象两个数据类型</div>
        <div>plusStyle 属性为字符串时，自定义的样式作用于整体的card（即最外层）</div>
        <Card title="为 card 添加自定义样式" plusStyle={redBackground}>
          本卡片标题和内容背景颜色同时变化
        </Card>
        <div>
          plusStyle 属性为对象时，需要 key 值为 head 或者 body, 值为 string 类型的自定义 css 样式
        </div>
        <Card title="为 head 添加自定义样式" plusStyle={{ head: blueBackground }}>
          本卡片标题背景颜色同时变化
        </Card>
        <br />
        <Card title="为 body 添加自定义样式" plusStyle={{ body: yellowBackground }}>
          本卡片内容背景颜色同时变化
        </Card>
      </Card>
    </div>
  )
}
