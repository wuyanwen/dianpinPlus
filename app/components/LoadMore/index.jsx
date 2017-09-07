import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.less'

class LoadMore extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div className={styles["load-more"]} ref="wrapper">
					{
						this.props.isLoadingMore
						? <span>加载中...</span>
						: <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
					}
				</div>
			)
	}
	componentDidMount(){

		const wrapper = this.refs.wrapper
		const loadMoreFn = this.props.loadMoreFn

		function callback(){
			const top = wrapper.getBoundingClientRect().top
			const windowHeight = window.screen.height

			if(top && top < windowHeight){
				loadMoreFn()
			}
		}

		//滚动事件
		let timeAction;
		window.addEventListener('scroll',()=>{
			if(this.props.isLoadingMore){
				return;
			}

			if(timeAction){
				clearTimeout(timeAction);
			}

			timeAction = setTimeout(callback,50);
		});
	}
	loadMoreHandle(){
		this.props.loadMoreFn();
	}
}

export default LoadMore