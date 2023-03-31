import {Dispatch} from 'redux'
import {AuthActionTypes, AythActions, IUser} from '../../typies/userType'
import {checkUserByName, createNewUser} from '../../controllers/userController'
const uniqid = require("uniqid") 
 
export const authLoginActionCreate = (name: string, password: string) => {
	return async (dispatch: Dispatch<AythActions>) => {

		try {
			const request = await checkUserByName(name)

			if(request === undefined) {

				console.log('ДА')
			}

			if(request !== undefined) {

				console.log('НЕТ')
			}


		} catch(err) {
			console.log(err)
		}
	}
}

export const authRegisterActionCreate = (name: string, password: string) => {
	return async (dispatch: Dispatch<AythActions>) => {

		try {
			const request: undefined | IUser = await checkUserByName(name)

			if(request === undefined) {
				const newUser = <IUser>{}
				newUser.id = uniqid()
				newUser.name = name
				newUser.password = password 
				newUser.favoritFilms = []
				console.log('authRegisterActionCreate newUser ', newUser)
				dispatch({
					type: AuthActionTypes.AUTH_SUCCESS,
					payload: {name, user: newUser}
				})
				await createNewUser(newUser)
			}

			if(request !== undefined) {
				dispatch({
					type: AuthActionTypes.AUTH_ERROR,
					payload: 404
				})
			}


		} catch(err) {
			console.log(err)
		}
	}
}




export const  authActionCteate = () => {
	console.log(23)
}