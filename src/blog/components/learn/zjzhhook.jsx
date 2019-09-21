import React, { Component } from 'react'

export default class zjzhhook extends Component {
	render() {
		return (
			<div>
				<ul>
				<h4>组合模式</h4>
					<ul>
					<li>定义:在react中设计模式就是组合，所以组合模式才是react的核心思想</li>
					<li>插槽形式的好处：引入一次多个组件复用</li>
					<p>组合模式有三种:</p>
					<li>插槽</li>
					<li>传参</li>
					<li>组件中直接使用</li>
					</ul>
				</ul>
				<ul>
				<h4>懒加载</h4>
				<ul>
				<li>使用组件懒加载的方式，已达到性能优化</li>
				<li>懒加载使用语法：lazy 方法里一个回调函数，回调函数返回一个 import 引入的组件</li>
				<li>懒加载---按需加载，当使用该组件的时候才加载，从而节省了性能开销 但过多使用会增多 http 请求
                Suspense 加载指式器</li>
				<li>懒加载使用：lazy 方法里一个回调函数，回调函数返回一个 import 引入的组件，必须配合 Suspense 组件，在 Susoense 组件上必须加 fallback 属性，接受一个值加载的动画或者提示之类</li>
				<li> 使用 lazy 必须配合 Suspense 组件，在 Susoense 组件上必须加 fallback 属性，该属性接受的值就是一个加载的动画或者提示之类的。</li>
				</ul>
				</ul>
				<ul>
				<h4>hook</h4>
				<ul>
					<li>hook这种写法只能在函数里，class写无效</li>
					<li>在函数里面使用hook,那么这种函数不叫做无状态组件了里，叫函数组件</li>
					<li>在 hook 里设置状态值是用新值替换旧值，和 class 里的 setState 的值是不一样</li>
					<li>生命周期:将挂着成功、更新成功、准备卸载三个生命周期合并了</li>
					<li>hook里的useEffect可以有多个，并且按照顺序执行；</li>
					<li>另外它可以监听某一个状态来触发
					第一个回调函数，第二个参数</li>
				</ul>
				</ul>
			</div>
		)
	}
}
