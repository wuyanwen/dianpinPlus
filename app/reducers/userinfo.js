import * as userTypes from '../constants/userinfo'

export default function userinfo(state={},action){
	switch(action.type) {
		case userTypes.USERINFO_UPDATE:
				return action.data;
		default:
			return state;
	}
}