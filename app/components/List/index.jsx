import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import styles from './style.less'

class HomeList extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div className={styles['list-container']}>
					{this.props.data.map((item,index)=>{
						return <Item key={index} data={item}/>
					})}
				</div>
			)
	}
}

export default HomeList