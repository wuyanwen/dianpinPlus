import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.less'

class CurrentCity extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div className={styles["current-city"]}>
					{this.props.cityName}
				</div>
			)
	}
}

export default CurrentCity