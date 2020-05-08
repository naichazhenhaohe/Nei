import React, { useState } from 'react'
import { Cascader, Card, Button } from '../../src'

export default function CardStory() {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }
          ]
        }
      ]
    }
  ]

  return (
    <div className="checkbox-demo narrow-card">
      <Card title="checked 属性">
        <Cascader options={options} />
      </Card>
    </div>
  )
}
