import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/app'

import Header from '../../components/Header'
import Center from './subpage/center'
import Animate from './subpage/animate'

import styles from './style.less'

class CSS extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	type:'',
	  	content:false,
	  	title:''
	  }
	}
	render(){
		return (
				<div>				
				{
					this.state.content
					? <div>
						<div id={styles["common-header"]}>
							<span className={styles["back-icon"]} onClick={this.currentback.bind(this)}>
								<i className="icon-chevron-left"></i>
							</span>
							<h1>{this.state.title}</h1>
						</div>
						<div id={styles["css-content"]}>
					  		{this.switchState()}
					  	</div>
					  </div>
					: <div>
						<Header title="CSS效果列表"/>
						<div id={styles["css-list"]}>
							<ul>
								<li onClick={this.changeType.bind(this,'center','css居中')}>1.css显示居中</li>
								<li onClick={this.changeType.bind(this,'animate','css动画')}>2.css动画</li>
							</ul>
						</div>	
					  </div>
				}									
				</div>
			)
	}
	componentDidMount(){
		this.props.appActionList.menu({
			location:0
		})
	}
	switchState(){
		switch(this.state.type) {
			case 'center':
				return <Center />
				break;
			case 'animate':
				return <Animate />
				break;
			default:
				return <div></div>
				break;
		}
	}
	changeType(type,title){
		this.setState({
			type:type,
			content:true,
			title:title
		})
	}
	currentback(){
		this.setState({
			type:'',
			content:false
		})
	}
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
		appActionList:bindActionCreators(appActions,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CSS)