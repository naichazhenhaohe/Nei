import React, { useState } from 'react'
import { Tooltip, Card, Isolator, Button } from '../../src'

export default function tagStory() {
  return (
    <div className="radio-demo narrow-card">
      <Card title="placement">
        <span>默认为top。有如下值</span>
        <div style={{ paddingLeft: '150px' }}>
          <Tooltip text="top" type="success" placement="top">
            top
          </Tooltip>
          <Tooltip text="topLeft" type="success" placement="topLeft">
            topLeft
          </Tooltip>
          <Tooltip text="topRight" type="success" placement="topRight">
            topRight
          </Tooltip>
          <Tooltip text="right" type="success" placement="right">
            right
          </Tooltip>
          <Tooltip text="rightTop" type="success" placement="rightTop">
            rightTop
          </Tooltip>
          <Tooltip text="rightBottom" type="success" placement="rightBottom">
            rightBottom
          </Tooltip>
          <Tooltip text="bottom" type="success" placement="bottom">
            bottom
          </Tooltip>
          <Tooltip text="bottomLeft" type="success" placement="bottomLeft">
            bottomLeft
          </Tooltip>
          <Tooltip text="bottomRight" type="success" placement="bottomRight">
            bottomRight
          </Tooltip>
          <Tooltip text="left" type="success" placement="left">
            left
          </Tooltip>
          <Tooltip text="leftTop" type="success" placement="leftTop">
            leftTop
          </Tooltip>
          <Tooltip text="leftBottom" type="success" placement="leftBottom">
            leftBottom
          </Tooltip>
        </div>
      </Card>
      <Card title="type">
        <Isolator>
          <span>
            string, 提示信息样式，值可为 default, success, warning, error, secondary, lite, dark
          </span>
          <Tooltip text="default" placement="right">
            default
          </Tooltip>
          <Tooltip text="success" type="success" placement="right">
            suceess
          </Tooltip>
          <Tooltip text="warning" type="warning" placement="rightTop">
            warning
          </Tooltip>
          <Tooltip text="error" type="error" placement="right">
            error
          </Tooltip>
          <Tooltip text="lite" type="lite" placement="right">
            lite
          </Tooltip>
          <Tooltip text="dark" type="dark" placement="right">
            dark
          </Tooltip>
          <Tooltip text="type值未被预设，则会以default形态出现" type="unset" placement="right">
            unset
          </Tooltip>
        </Isolator>
      </Card>
      <Card title="leaveDelay & enterDelay">
        <Isolator>
          <span>tooltip出现/消失的延迟。</span>
          <span>leaveDelay 默认为0 </span>
          <span>enterDelay 默认为100 </span>
          <span>单位为毫秒 ms</span>
          <Tooltip text="0.5s后出现" type="error" enterDelay={500}>
            <Button danger>enterDelay 500</Button>
          </Tooltip>
          <Tooltip text="0.5s后消失" type="error" leaveDelay={500}>
            <Button danger>leaveDelay 500</Button>
          </Tooltip>
        </Isolator>
      </Card>
      <Card title="onVisibleChange">
        <Isolator>
          <span>显示/隐藏状态改变时触发事件</span>
          <Tooltip
            text="onVisibleChange"
            onVisibleChange={() => {
              alert('changed')
            }}
          >
            onVisibleChange
          </Tooltip>
        </Isolator>
      </Card>
      <Card title="offset">
        <Isolator>
          <span>提示框与目标的距离。默认为12</span>
          <Tooltip text="offert 12" placement="right" type="error">
            offert 12
          </Tooltip>
          <Tooltip text="offert 20" placement="right" offset={20} type="error">
            offert 20
          </Tooltip>
        </Isolator>
      </Card>
    </div>
  )
}
