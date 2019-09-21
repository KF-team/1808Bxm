import React, { Component } from 'react';

export default class refbj extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>refs基础</p>
          <ul>
			<li>定义：React 支持一个特殊的、可以附加到任何组件上的 ref 属性，可以直接访问 DOM 元素或组件实例</li>
            <li>在组件里直接使用refs可以在元素上直接给ref属性一个字符串名字</li>
            <li>
              这种写法好处是简单，缺点是不能保证名字的唯一性，容易写重复，这种写法只能是在class组件中使用
            </li>
            <li>只能在class组件里创建refs</li>
            <p>ref使用步骤</p>
            <li>1.使用createRef创建一个ref对象</li>
            <li>
              2.在任何react元素上都有一个内置的ref属性用来绑定创建后的ref对象
            </li>
            <li>3.使用ref对象里的current属性取到真实的dom元素</li>
            <p>ref是什么？</p>
            <li>允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。</li>
          </ul>
          <p>ref转发</p>
          <ul>
            <p>ref语法：</p>
            <li>1.创建一个ref对象</li>
            <li>2.使用forwardRef函数创建一个接受ref的组件</li>
            <ul>
              <li>
                这个函数接受一个回调函数，该回调函数有两个参数，一个props，一个ref
              </li>
              <li>一旦自定义组件传递就要使用 React.forwardRef</li>
            </ul>
            <li> 3.将接受ref的组件使用，并且传给ref </li>
			<ul>
			<p>forwardRef 的使用:</p>
			<li> 1 定义：它是 React 下面的顶级 api，自身是一个函数</li>
			<li>1语法：该函数接受一个回调函数，回调函数里接受两个参数：props 和 refs</li>
			<p>ref 转发定义：</p>
			<li>1. 将父组件中的 ref 对象传递给子组件，用来获取子组件中的 dom 元素</li>
			<li>2. ref 转发就是转发父组件中的 ref 对象到子组件里，用来获取子组件中的 dom 元素</li>
			<li>3. 切记一个原则：如果在自定义组件上使用 ref 属性，那么该子组件必须是由 forwardRef 生成的，否则报错</li>
			<p>4. 高阶组件里的转发：</p>
			<li>1 谨记一条原则：除了 class 组件上，如果要传递 ref,需要使用自定义属性将 ref 通过 props 传递进去</li>
			<li>2 除了 class 特别之外，其他的自定义组件上使用 ref 的话，那么该组件必须使用 forwardRef 创建的，forwardRef 就是用来接收传递进来的 ref 对象的</li>
			</ul>
          </ul>
          <p>高阶组件转发</p>
          <ul>
            <li>1.index组件创建ref对象</li>
            <li>2.下面使用高阶组件</li>
            <li>在另一个组件使用forwardRef来创建一个ref组件</li>
            <li>3.实力化高阶组件：this.Hoc = hoc(RofWardRef)</li>
            <li>4.在forwardRef组件使用</li>
            <li></li>
			<h4>下面是几个适合使用 refs 的情况</h4>
			<li>管理焦点，文本选择或媒体播放</li>
			<li>集成第三方 DOM 库。</li>
			<li>触发强制动画。</li>
          </ul>
        </ul>
      </div>
    );
  }
}
