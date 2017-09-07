import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Prism from 'prismjs'
import StyleData from './animateData'

import animatestyles from './animate.less'
import styles from '../style.less'

class Animate extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id={animatestyles["animate"]}>
					<div id={animatestyles["animate1"]} className={animatestyles["animate-list"]} ref="animate1">
						<div className={animatestyles["item"]}>位移</div>
						<div className={styles["content"]} ref="content1"><pre></pre></div>
					</div>
					<div id={animatestyles["animate2"]} className={animatestyles["animate-list"]} ref="animate2">
						<div className={animatestyles["animate-title"]}>
							<div className={animatestyles["item"]+" "+animatestyles["item1"]}>旋转1</div>
							<div className={animatestyles["item"]+" "+animatestyles["item2"]}>旋转2</div>
							<div className={animatestyles["item-line"]}></div>
						</div>
						<div className={styles["content"]} ref="content2"><pre></pre></div>
					</div>
					<div id={animatestyles["animate3"]} className={animatestyles["animate-list"]} ref="animate3">
						<div className={animatestyles["item"]}>翻转</div>
						<div className={styles["content"]} ref="content3"><pre></pre></div>
					</div>
				</div>
			)
	}

	componentDidMount(){
		const animate = [
				this.refs.animate1,
				this.refs.animate2,
				this.refs.animate3
			]
		const content = [
				this.refs.content1,
				this.refs.content2,
				this.refs.content3
			]

		animate.map((item)=>{
			item.addEventListener("click",function(e){

				let content = item.getElementsByClassName(styles['content'])[0];

				content.style.right = '-1px';
				content.style.width = '101%';

				e.stopPropagation();
				e.preventDefault();
			});
		})


		content.map((item,index)=>{

			item.getElementsByTagName('pre')[0].innerHTML = Prism.highlight(StyleData[index], Prism.languages.css);


			item.addEventListener("click",function(e){

				item.style.right = '-100%';
				item.style.width = '0%';

				e.stopPropagation();
				e.preventDefault();
			});
		})
		
	}
}

export default Animate