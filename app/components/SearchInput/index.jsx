import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.less'

class SearchInput extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	value:''
	  }
	}
	render(){
		return (
				<div className={styles['search-container']}>
					<i className="icon-search"></i>
					<input 
						type="text"
						placeholder="请输入关键字"
						value={this.state.value}
						onChange={this.changeHandle.bind(this)}
						onKeyUp={this.keyUpHandle.bind(this)}
					/>
				</div>
			)
	}
	componentDidMount(){
		this.setState({
			value:this.props.value || ''
		})
	}
	changeHandle(e){
		this.setState({
			value:e.target.value
		})
	}
	keyUpHandle(e){
		if ( e.keyCode !== 13 ){
			return;
		}

		this.props.enterHandle(this.state.value);
	}
}

export default SearchInput