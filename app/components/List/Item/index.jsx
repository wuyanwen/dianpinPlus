import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import styles from './style.less'

class Item extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.data;
		return (
				<div className={styles['list-item']+" clear-fix"}>
					<Link to={'/detail/'+data.id}>
						<div className={styles['item-img-container']+" float-left"}>
							<img src={data.img} alt={data.title}/>
						</div>
						<div className={styles['item-content']}>
							<div className={styles['item-title-container']+" clear-fix"}>
								<h3 className="float-left">{data.title}</h3>
								<span className="float-right">{data.distance}</span>
							</div>
							<p className={styles['item-sub-title']}>
								{data.subTitle}
							</p>
							<div className={styles['item-price-container']+" clear-fix"}>
								<span className={styles['price']+" float-left"}>￥{data.price}</span>
								<span className={styles['number']+" float-right"}>已售{data.number}</span>
							</div>
						</div>
					</Link>
				</div>
			)
	}
}

export default Item