import {Dispatch} from 'redux'
import {AuthActionTypes, AythActions, IUser} from '../../typies/userType'
import {
	checkUserByName, 
	createNewUser, 
	checkUserByNameAndPassword,
	checkUserByID
} from '../../controllers/userController'
const uniqid = require("uniqid") 


// Создаем нового пользователя
export const authRegisterActionCreate = (name: string, password: string) => {
	return async (dispatch: Dispatch<AythActions>) => {

		try {
			const request: undefined | IUser = await checkUserByName(name)

			if(request === undefined) {
				const newUser = <IUser>{}
				newUser.id = uniqid()
				newUser.token = newUser.id
				newUser.name = name
				newUser.password = password 
				newUser.favoritFilms = []
				console.log('authRegisterActionCreate newUser ', newUser)
				dispatch({
					type: AuthActionTypes.AUTH_REGISTER_SUCCESS,
					payload: {name, user: newUser, token: String(newUser.token)}
				})
				await localStorage.setItem('token', newUser.token)
				await createNewUser(newUser)
			}

			if(request !== undefined) {
				dispatch({
					type: AuthActionTypes.AUTH_REGISTER_ERROR,
					payload: 404 // Имя пользователя занято
				})
			}

		} catch(err) {
			console.log(err)
		}
	}
}

// Авторизация пользователя
export const authLoginActionCreate = (name: string, password: string) => {
	return async (dispatch: Dispatch<AythActions>) => {

		try {
			// Провряет наличие пользователя
			const request = await checkUserByNameAndPassword(name, password)

			if(request === undefined) {
				dispatch({
					type: AuthActionTypes.AUTH_REGISTER_ERROR,
					payload: 405 // Неверный пароль или имя
				})
			}

			if(request !== undefined) {
				dispatch({
					type: AuthActionTypes.AUTH_LOGIN_SUCCESS,
					payload: {name: request.name, user: request, token: String(uniqid())}
				})
				await localStorage.setItem('token', request.id)
			}

		} catch(err) {
			dispatch({
				type: AuthActionTypes.AUTH_REGISTER_ERROR,
				payload: 405 // Неверный пароль или имя
			})
		}
	}
}

// Проверяем пользователя при перезагрузках страниы
export const authMeActionCreater = () => {
	return async (dispatch: Dispatch<AythActions>) => {
		const token = await localStorage.getItem('token')

		if(token === null) {
			return dispatch({type: AuthActionTypes.AUTH_ME_ERROR})
		}

		if(token !== null) {
			const request: undefined | IUser = await checkUserByID(token)

			if(request) {
				return dispatch({
					type: AuthActionTypes.AUTH_ME,
					payload: {name: request.name, user: request, token}
				})
			}
		}
		
	}
}


// Выход пользователя из личнго кабинета
export const logoutActionCreater = () => {
	return async (dispatch: Dispatch<AythActions>) => {
		await localStorage.removeItem('token')
		return  dispatch({
			type: AuthActionTypes.AUTH_LOGOUT
		})
	}
}