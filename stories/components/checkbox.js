import React from 'react'
import { Checkbox, Card } from '../../src'

export default function CardStory() {
  return (
    <div className="checkbox-demo narrow-card">
      <Card title="direction 属性">
        <Checkbox checked onChange={e => console.log('changed')}>
          Checkbox
        </Checkbox>
      </Card>
    </div>
  )
}
