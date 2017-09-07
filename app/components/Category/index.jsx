import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router-dom'

import styles from './style.less'

class Category extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	index:0
	  }
	}
	render(){
		
		const opt = {
			auto:2500,
			callback:(index)=>{
				this.setState({
					index:index
				})
			}
		}

		return (
				<div id={styles["home-category"]}>
					<ReactSwipe swipeOptions={opt}>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
								<Link to="/search/jingdian"><li className={styles["jingdian"]+" float-left"}>景点</li></Link>
	                            <Link to="/search/ktv"><li className={styles["ktv"]+" float-left"}>KTV</li></Link>
	                            <Link to="/search/gouwu"><li className={styles["gouwu"]+" float-left"}>购物</li></Link>
	                            <Link to="/search/shenghuofuwu"><li className={styles["shenghuofuwu"]+" float-left"}>生活服务</li></Link>
	                            <Link to="/search/jianshenyundong"><li className={styles["jianshenyundong"]+" float-left"}>健身运动</li></Link>
	                            <Link to="/search/meifa"><li className={styles["meifa"]+" float-left"}>美发</li></Link>
	                            <Link to="/search/qinzi"><li className={styles["qinzi"]+" float-left"}>亲子</li></Link>
	                            <Link to="/search/xiaochikuaican"><li className={styles["xiaochikuaican"]+" float-left"}>小吃快餐</li></Link>
	                            <Link to="/search/zizhucan"><li className={styles["zizhucan"]+" float-left"}>自助餐</li></Link>
	                            <Link to="/search/jiuba"><li className={styles["jiuba"]+" float-left"}>酒吧</li></Link>
							</ul>
						</div>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
								<Link to="/search/meishi"><li className={styles["meishi"]+" float-left"}>美食</li></Link>
	                            <Link to="/search/dianying"><li className={styles["dianying"]+" float-left"}>电影</li></Link>
	                            <Link to="/search/jiudian"><li className={styles["jiudian"]+" float-left"}>酒店</li></Link>
	                            <Link to="/search/xuixianyule"><li className={styles["xuixianyule"]+" float-left"}>休闲娱乐</li></Link>
	                            <Link to="/search/waimai"><li className={styles["waimai"]+" float-left"}>外卖</li></Link>
	                            <Link to="/search/huoguo"><li className={styles["huoguo"]+" float-left"}>火锅</li></Link>
	                            <Link to="/search/liren"><li className={styles["liren"]+" float-left"}>丽人</li></Link>
	                            <Link to="/search/dujiachuxing"><li className={styles["dujiachuxing"]+" float-left"}>度假出行</li></Link>
	                            <Link to="/search/zuliaoanmo"><li className={styles["zuliaoanmo"]+" float-left"}>足疗按摩</li></Link>
	                            <Link to="/search/zhoubianyou"><li className={styles["zhoubianyou"]+" float-left"}>周边游</li></Link>
							</ul>
						</div>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
								<Link to="/search/ribencai"><li className={styles["ribencai"]+" float-left"}>日本菜</li></Link>
	                            <Link to="/search/SPA"><li className={styles["SPA"]+" float-left"}>SPA</li></Link>
	                            <Link to="/search/jiehun"><li className={styles["jiehun"]+" float-left"}>结婚</li></Link>
	                            <Link to="/search/xuexipeixun"><li className={styles["xuexipeixun"]+" float-left"}>学习培训</li></Link>
	                            <Link to="/search/xican"><li className={styles["xican"]+" float-left"}>西餐</li></Link>
	                            <Link to="/search/huochejipiao"><li className={styles["huochejipiao"]+" float-left"}>火车机票</li></Link>
	                            <Link to="/search/shaokao"><li className={styles["shaokao"]+" float-left"}>烧烤</li></Link>
	                            <Link to="/search/jiazhuang"><li className={styles["jiazhuang"]+" float-left"}>家装</li></Link>
	                            <Link to="/search/chongwu"><li className={styles["chongwu"]+" float-left"}>宠物</li></Link>
	                            <Link to="/search/quanbufenlei"><li className={styles["quanbufenlei"]+" float-left"}>全部分类</li></Link>
							</ul>
						</div>
					</ReactSwipe>
					<div className={styles["index-container"]}>
						<ul>
							<li className={this.state.index === 0 ? styles["selected"] : ''} data-index="0" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 1 ? styles["selected"] : ''} data-index="1" onClick={this.SwipeCategory.bind(this)}></li>
							<li className={this.state.index === 2 ? styles["selected"] : ''} data-index="2" onClick={this.SwipeCategory.bind(this)}></li>
						</ul>
					</div>
				</div>
			)
	}

	SwipeCategory(e){

		// this.setState({
		// 	index:parseInt(e.target.getAttribute("data-index"))
		// })

		e.preventDefault();
		e.stopPropagation();
	}
}

export default Category