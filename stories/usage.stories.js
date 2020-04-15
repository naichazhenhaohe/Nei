import React from 'react'
import { storiesOf } from '@storybook/react'

import { ButtonStory, CardStory, Isolator, Checkbox, Radio, Switch, Tag, Input } from './components'
import './stories.less'

storiesOf('食用指南', module)
  .add('Button', () => <ButtonStory />)
  .add('Card', () => <CardStory />)
  .add('Isolator', () => <Isolator />)
  .add('Checkbox', () => <Checkbox />)
  .add('Radio', () => <Radio />)
  .add('Switch', () => <Switch />)
  .add('Tag', () => <Tag />)
  .add('Input', () => <Input />)
