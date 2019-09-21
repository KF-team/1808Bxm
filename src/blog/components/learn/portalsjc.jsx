import React, { Component } from 'react';

export default class portalsjc extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>portals方法：</p>
          <ul>
            <li>
              portals：提供了一种将子节点渲染到存在于父组件以外的 DOM
              节点的优秀的方案。
            </li>
            <li>语法：ReactDOM 来自于 ReactDOM.createPortal</li>
            <li>语法：接受两个参数：第一个参数的节点/组件，第二个参数是容器</li>
            <li>
              使用场景：比如当前组件固定宽高并且露出出隐藏，而当前组件在需要弹出一个宽高大于当前组件的子组件,那么就使用该方法将子组件插入到其他的容器里
            </li>
            <li>主意：该方法必须只能是在 render/return 里写。</li>
            <p>插容器组件时需要主意生命周期的执行原则：</p>
            <li>
              1. 如果是插入到 html 页面上已有的元素容器里，则直接获取到 dom 元素
            </li>
            <li>
              2. 如果是插入到 react 组件里，需要注意生命周期，可以用 state
              接收容器组件 DOM 对象，在挂载成功的函数内进行获取，保证容器组件
            </li>
            <li>通过改变:statethis.state = (el: null) </li>
            <li>通过生成元素:document.createElement('div') div.id = 'app'</li>
            <li>
              直接挂载到root上: document.getElementById('root').appendChild(div)
            </li>
            <li>
              portals：提供了一种将子节点渲染到存在于父组件以外的 DOM
              节点的优秀的方案。
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}
