import React from 'react'
import { Button, Card } from '../../src'

export default function ButtonStory() {
  const style_1 = `
  button {
    background-color: #d8ff00;
  }
`
  const style_2 = `
  background-color: #ffbebe;
`
  return (
    <div className="btn-demo narrow-card">
      <Card title="type 属性">
        <div>值可为 default (默认) / primary / link</div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="link">Link</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
      </Card>

      <Card title="danger 属性">
        <div>默认为 false</div>
        <Button danger>Danger</Button>
        <Button danger type="link">
          Danger Link
        </Button>
      </Card>

      <Card>
        <Button onClick={e=>alert(typeof e)}>click</Button>
      </Card>

      <Card title="disabled 属性">
        <Button type="primary" disabled>
          Disabled primary
        </Button>
        <Button disabled>Disabled default</Button>
        <Button type="link" disabled>
          Disabled link
        </Button>
      </Card>

      <Card title="onClick 属性">
        <Button onClick={() => alert('clieked!')}>Click me</Button>
      </Card>

      <Card title="ghost">
        <div style={{ background: '#bbb' }}>
          <Button ghost>demo</Button>
          <Button ghost type="link">
            demo
          </Button>
          <Button ghost type="primary">
            demo
          </Button>
        </div>
      </Card>
      <Card title="size">
        <Button size="small">small btn</Button>
        <Button size="default">btn</Button>
        <Button size="large">large btn</Button>
      </Card>
    </div>
  )
}
