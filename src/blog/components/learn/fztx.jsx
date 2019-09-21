import React, { Component } from 'react'

export default class fztx extends Component {
	render() {
		return (
			<div>	
				<ul>
					<p>*父传子</p>
					<ul>
					<li>父组件修改值，将改变的值传递给子组件，该方法叫做父传子通信</li>
					</ul>
					<p>*高阶组件</p>
					<ul>
					<li>
						1.使用高阶组件时，主要不要在render里直接使用，会造成每次更新的时候都重新生成高级组件
					</li>
					<li>
						2.高级组件意义：在于公共相同的函数和逻辑，当有多个子组件的逻辑和事件相同的时候，我们使用高级组件将这些可复用的事件
					</li>
					<li>
						3.高阶组件不是API，它是一种组合模式。
					</li>
					<li>
						4.react里提倡的模式是组合，不是继承
					</li>
					</ul>
				</ul>
			</div>
		)
	}
}
