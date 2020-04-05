import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

storiesOf('Button', module).add('按钮-食用指南', () => {
  const style_1 = `
    background-color: #d8ff00;
  `
  const style_2 = `
    background-color: #ffbebe;
  `
  return (
    <div className="btn-demo">
      <div>属性 type。值可为 default (默认) / primary / link</div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="link">Link</Button>
      <div>属性 danger</div>
      <Button danger>Danger</Button>
      <Button danger type="link">
        Danger Link
      </Button>
      <div>属性 ghost</div>
      <Button ghost>ghost</Button>
      <div>属性 plusStyle</div>
      <div>传入string类型css代码就可为引用的button组件添加特有的自定义样式</div>
      <Button plusStyle={style_1}>Plus Style</Button>
      <Button plusStyle={style_2}>Plus Style</Button>
      <div>属性 disabled</div>
      <Button type='primary' disabled>Disabled primary</Button>
      <Button disabled>Disabled default</Button>
      <Button type='link' disabled>Disabled link</Button>
      <div>属性 onClick </div>
      <Button onClick={() => alert('clieked!')}>Click me</Button>
    </div>
  )
})
