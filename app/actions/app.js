import * as appTypes from '../constants/app'

export function menu(data){
	return {
		type:appTypes.MENU_UPDATE,
		data
	}
}