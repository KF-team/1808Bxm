import React, { Component } from 'react'
//父子
import Fztx from './fztx'
//组合
import Zhhook from './zjzhhook'
//上下文
import Sxwdx from './sxwdx'
//ref基础
import Refbj from './refbj'
//portals
import Portals from './portalsjc'
// ant卡片组件
import { Card } from 'antd'
//  设置卡片组件中的宽度和位置
const gridStyle = {
  width: '100%',
  textAlign: 'start'
}
export default class Index extends Component {
  render() {
    return (
      <div>
        <Card title="start！">
          <Card style={{ marginTop: 16 }} type="inner" title="父子通信">
            <Card.Grid style={gridStyle}>
              <Fztx />
            </Card.Grid>
          </Card>

          <Card style={{ marginTop: 1 }} type="inner" title="上下文对象">
            <Card.Grid style={gridStyle}>
              <Sxwdx />
            </Card.Grid>
          </Card>

          <Card
            style={{ marginTop: 1 }}
            type="inner"
            title="组合模式、懒加载、hook"
          >
            <Card.Grid style={gridStyle}>
              <Zhhook />
            </Card.Grid>
          </Card>

          <Card style={{ marginTop: 1 }} type="inner" title="refs笔记">
            <Card.Grid style={gridStyle}>
              <Refbj />
            </Card.Grid>
          </Card>

          <Card style={{ marginTop: 1 }} type="inner" title="portals基础">
            <Card.Grid style={gridStyle}>
              <Portals />
            </Card.Grid>
          </Card>
        </Card>
      </div>
    )
  }
}
