import { configure } from '@storybook/react'

function loadStories() {
  require('../docs/index.js')
}

configure(loadStories, module);