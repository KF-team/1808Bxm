import React, { Component } from 'react';
//父子
import Fztx from './fztx';
//组合
import Zhhook from './zjzhhook';
//上下文
import Sxwdx from './sxwdx';
//ref基础
import Refbj from './refbj';
//portals
import Portals from './portalsjc'
export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>欢迎来到&知识学习吧！！！</h1>
        <h3>父子通信</h3>
        <Fztx />
        <h3>组合模式、懒加载、hook</h3>
        <Zhhook />
        <h3>上下文对象</h3>
        <Sxwdx />
        <h3>refs笔记</h3>
        <Refbj />
		<h3>portals基础</h3>
		<Portals/>
      </div>
    );
  }
}
