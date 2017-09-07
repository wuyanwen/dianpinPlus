import { combineReducers } from 'redux'
import userinfo from './userinfo'
import app from './app'

export default combineReducers({
	userinfo,
	app
})