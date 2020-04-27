import React from 'react'
import { Button, Card, Isolator } from '../../src'

export default function CardStory() {
  return (
    <div className="card-demo narrow-card">
      <Card title="title 属性">
        <Card title="可以为字符串">标题为字符串, 超出的内容以省略号展示</Card>
        <br />
        <Card title={<span style={{ color: 'red' }}>也可以为自定义节点</span>}>标题为节点</Card>
        <br />
        <Card>也可以不使用标题</Card>
      </Card>

      <Card title="bodyClassName">
        <p>string, 用于卡片 body 的 className</p>
        <p>如下方卡片使用 bodyClassName 为 body 添加灰色背景</p>
      </Card>

      <Card title="bordered 属性" bodyClassName="grayCard">
        <p>默认为 true, 即存在边框</p>
        <p>适合在有色背景下使用</p>
        <Card title="无边框 Card" bordered={false}>
          <p>这里是无边框 Card 的内容</p>
        </Card>
      </Card>

      <Card title="hoverable" hoverable>
        <p>boolean, 默认为 false</p>
        <p>为 true 时，当卡片被鼠标覆盖会呈悬浮状态</p>
      </Card>

      <Card title="size">
        <p>默认为default, 还可为 small</p>
        <Card title="default"> size 为 default</Card>
        <br />
        <Card title="small" size="small">
          size 为 small
        </Card>
      </Card>
    </div>
  )
}
