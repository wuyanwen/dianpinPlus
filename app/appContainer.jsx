import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//redux流
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from './actions/userinfo'

//本地缓存配置
import { CITYNAME } from './config/localStorekey'
import LocalStore from './util/localStore'

// bundle模型用来异步加载组件
import Bundle from './bundle';

// 不需要异步加载的组件
import HomeContainer from './containers/Home'
import FooterContainer from './components/Footer'

// 异步加载文件
import CityContainer from 'bundle-loader?lazy!./containers/City'
import SearchContainer from 'bundle-loader?lazy!./containers/Search'
import UserContainer from 'bundle-loader?lazy!./containers/user'
import DetailContainer from 'bundle-loader?lazy!./containers/Detail'
import NotFoundContainer from 'bundle-loader?lazy!./containers/NotFound'


const City = (props)=> (
	<Bundle load={CityContainer}>
		{(City)=><City history={props.props.history}/>}
	</Bundle>
)

const Search = (props)=>(
	<Bundle load={SearchContainer}>
		{(Search)=><Search 
					history={props.props.history}
					match={props.props.match}
				/>}
	</Bundle>
)
const User = (props)=>(
	<Bundle load={UserContainer}>
		{(User)=><User history={props.props.history}/>}
	</Bundle>
)

const Detail = (props)=>(
	<Bundle load={DetailContainer}>
		{(Detail)=><Detail 
					history={props.props.history}
					match={props.props.match}
				/>}
	</Bundle>
)

const NotFound = (props)=>(
	<Bundle load={NotFoundContainer}>
		{(NotFound)=><NotFound history={props.props.history}/>}
	</Bundle>
)


class AppContainer extends Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
	render(){
		const history = createBrowserHistory();
		return (
			<Router>
			{
				this.state.initDone
				?	<div id="app">
						<Switch>
							<Route exact path="/" component={HomeContainer}/>
							<Route exact 
								path="/city" 
								render={props=>(
									<City props={props} />
								)}
							/>
							<Route 
								path="/search/:category/:keyword?" 
								render={props=>(
									<Search props={props} />
								)}
							/>
							<Route 
								path="/detail/:id" 
								render={props=>(
									<Detail props={props} />
								)}
							/>
							<Route 
								path="/user" 
								render={props=>(
									<User props={props} />
								)}
							/>
							<Route 
								render={props=>(
									<NotFound props={props} />
								)}
							/>
						</Switch>
						<FooterContainer history={history}/>
					</div>
				: 	<div>正在加载...</div>
			}
			</Router>
		)
	}
	componentDidMount(){
		let cityName = LocalStore.getItem(CITYNAME)
		if(cityName == null){
			cityName = '上海'
		}

		this.props.userInfoActions.update({
			cityName:cityName
		})
		
		this.setState({
			initDone:true
		})
	}
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions:bindActionCreators(userInfoActionsFromOtherFiles,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer)