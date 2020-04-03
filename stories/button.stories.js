import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

storiesOf('Button', module).add('with text', () => {
  const style = `color: red;`
  return (
    <Button type="primary" plusStyle={style}>
      <span>测试</span>
    </Button>
  )
})
