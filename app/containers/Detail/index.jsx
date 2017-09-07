import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/app'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'

class Detail extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const id = this.props.match.params.id
		return (
				<div>
					<Header title="商户详情"/>
					<Info id={id}/>
					<Comment id={id}/>
				</div>
			)
	}
	componentDidMount(){
		this.props.appActionList.menu({
			location:0
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
)(Detail)