import React, { useState } from 'react'
import { Cascader, Card, Button, Isolator } from '../../src'

export default function CardStory() {
  const options = [
    {
      value: 'zhejiang',
      label: '浙江',
      children: [
        {
          value: 'hangzhou',
          label: '杭州',
          children: [
            {
              value: 'xihu',
              label: '西湖'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: '江苏',
      children: [
        {
          value: 'nanjing',
          label: '南京',
          disabled: true,
          children: [
            {
              value: 'zhonghuamen',
              label: '中华门'
            }
          ]
        }
      ]
    },
    {
      value: 'shanghai',
      label: '上海'
    }
  ]

  const handleChange = value => {
    console.log(value)
  }

  return (
    <div className="checkbox-demo narrow-card">
      <Card title="checked 属性">
        <Cascader options={options} />
      </Card>
      <Card title="checked 属性">
        <Isolator>
          <Cascader disabled size="small" onChange={handleChange} options={options} />
          <Cascader options={options} />
          <Cascader size="large" options={options} />
        </Isolator>
      </Card>
    </div>
  )
}
