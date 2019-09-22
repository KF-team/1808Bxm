import React, { Component } from 'react'
import './style/index.scss'
// 登陆
import Login from './login'
// 注册
import Register from './register'
// 引入首页
import Home from './home'

export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      isDom: 'register'
    }
  }
  // 获取组件的返回状态
  getstatus = data => {
    console.log(data)
    if (data.key) {
      sessionStorage.setItem('limit', JSON.stringify({ key: data.key }))
    }

    this.setState({
      isDom: data.typename
    })
  }

  render() {
    let Dom = ''
    // 如果用户登录进后并且没有退出那么刷新页面将不会改变页面 依旧在home页面
    if (
      JSON.parse(sessionStorage.getItem('limit')) &&
      JSON.parse(sessionStorage.getItem('userRegister'))
    ) {
      Dom = <Home />
    } else {
      // eslint-disable-next-line default-case
      switch (this.state.isDom) {
        case 'register':
          Dom = <Register getstatus={this.getstatus} />
          break
        case 'login':
          Dom = <Login getstatus={this.getstatus} />
          break
        case 'home':
          Dom = <Home />
          break
      }
    }

    return <div>{Dom}</div>
  }
}
