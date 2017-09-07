import * as userTypes from '../constants/userinfo'

export function update(data){
	return {
		type:userTypes.USERINFO_UPDATE,
		data
	}
}