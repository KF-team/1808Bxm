import React, { Component } from 'react';

export default class sxwdx extends Component {
  render() {
    return (
      <div>
		<ul>
        <h4>上下文对象</h4>
        <ul>
          <li>
            {' '}
            官方：一个典型的 React
            引用中，数据是通过但是这种做法对于某些类型的属性而言是极其繁琐的，这些属性是引用程序中许多组件都需要的。Context
            提供了一种在组件之间共享此类值的方式，
          </li>
          <li>
            使用场景：当我们 dom 层级很多时，数据是一级一级从父级向下传递 props
            得到的，每个组件都要写 props
          </li>
          <li>好处是:直观好查找</li>
          <li>
            缺点：耦合高，不利于维护，中间有一层忘了写 props
            就会导致下面的层级丢失数据
          </li>

		<ul>
		<ul>
          <li>React.createContext:创建上下文对象r</li>
          <li>Context.Provider:上下文数据提供者组件</li>
          <li>Context.Consumer: 上下文组件渲染组件</li>
          <li>Class.contextType:订阅者</li>
		  </ul>
		</ul>
          <li>
            export Provider,Consumer 使用export
            default暴露出来的是一个对象【集合】，在引用的时候只能是一个变量的形式，而不能解构
          </li>
          <li>将上下文对象复给class组件的静态属性：contextType</li>
          <li>固定语法：在Consumer组件里使用函数来获取值并且使用值</li>
        </ul>
		</ul>

		<ul>
        <h4>context 语法:</h4>
		<ul>
        <p>1.创建上下文对象：createContext()</p>
        <p>2.在根容器组件引入创建后的上下文对象</p>
		<ul>
			<ul>
        <li>
          - 使用 provider 组件来提供数据，在 Provider 组件上的 value
          属性里存放数据 
		</li>
		  <li> - 在子组件里引入创建后的上下文对象 - 使用 Consumer
          组件来获取最近的 Provider 上的数据
		  </li>
		  <li> - 在 Consumer
          组件里必须用固定语法--一个函数来处理获取的数据
		  </li>
        </ul>
		</ul>
        <p>3.context 对象正在使用过程中需要注意哪些地方？</p>
        <li>
           - 所有的组件它们必须使用同一个创建后的 Context 对象
        </li>
		<li> - Consumer
          组件里必须是一个函数的写法</li>
		<p>Consumer 组件工作原理：</p>
		<li> 一直向上找，直到找到 Provider 组件才停止(中间如果有组件不写也可以找，直到找到为止)</li>
		<p>contextType:它是class组件独有的静态属性:</p>
		<li>它用来获取上下文对象，一般是将上下文对象赋给它</li>
		<li>使用this.context对象来使用上下文仓库里的数据</li>
		<p>需要主意的是:</p>
		<li>- 如果该组件的父级中有Provider组件，那么this.context的值就是来自Provider托管的数据；</li>
		<li>- 如果该组件没有父级组件，或者父级即以上组件里都没有Provider组件的时候，this.context的值就是创建上下文对象方法里的数据；</li>
		</ul>
		</ul>


		<ul>
        <h5>上下文步骤</h5>
        <ul>
          <li>1.使用顶级api-createContextcj上下文对象</li>
          <li>2.在根父容器里引入数据提供者组件Provider</li>
          <li>3.在子组件里引入Consumer，以获取Provider组件托管的数据</li>
        </ul>
		</ul>
      </div>
    );
  }
}
