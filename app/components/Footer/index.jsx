import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import styles from './style.less'

class Footer extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const menu = this.props.app.location;
		return (
				<div>
				{
					menu === 0
					?   ''
					:   <div id={styles["common-footer"]}>
							<ul className={styles["footer-list"]}>
								<li>
									{
										menu === 1
										? <span className={styles["active"]}>首页</span>
										: <Link to="/"><span>首页</span></Link>
									}							
								</li>
								<li>
									{
										menu === 3
										? <span className={styles["active"]}>发现</span>
										: <Link to="/search/all"><span>发现</span></Link>
									}
								</li>
								<li>
									{
										menu === 4
										? <span className={styles["active"]}>我的</span>
										: <Link to="/user"><span>我的</span></Link>
									}
								</li>
							</ul>
					    </div>
				}
				</div>
			)
	}
	componentDidMount(){
		
	}
}

function mapStateToProps(state){
	return {
		app:state.app
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)