import {IAuthState, AuthActionTypes, AythActions} from '../../typies/userType'


const initialState: IAuthState = {
	error: null,
	isAuth: false,
	loading: false,	
	name: '',
	saccess: false,
	statuse: null,
	token: null,
	user: null,
}

export const authReducer = (state = initialState, action: AythActions): IAuthState => {
	switch (action.type) {

		case AuthActionTypes.AUTH_REGISTER:
			return {
				...state, loading: true, statuse: null
			}

		case AuthActionTypes.AUTH_REGISTER_SUCCESS:
			return {
				...state, loading: true, statuse: null, user: action.payload.user, name: action.payload.name, token: action.payload.token, isAuth: true,
				saccess: true
			}

		case AuthActionTypes.AUTH_REGISTER_ERROR:
			return {
				...state, loading: true, statuse: action.payload
			}

		case AuthActionTypes.AUTH_LOGI:
			return {
				...state, loading: true, statuse: null
			}

		case AuthActionTypes.AUTH_LOGIN_SUCCESS:
			return {
				...state, loading: true, statuse: null, user: action.payload.user, name: action.payload.name, token: action.payload.token, saccess: true, isAuth: true
			}

		case AuthActionTypes.AUTH_LOGIN_ERROR:
			return {
				...state, loading: true, statuse: action.payload
			}

		case AuthActionTypes.AUTH_LOGIN_SUCCESS:
			return {
				...state, loading: false, statuse: null, user: action.payload.user, name: action.payload.name, token: action.payload.token, saccess: true, isAuth: true
			}

		// Проверяем пользователя при перезагрузках странцы
		// Если токена нет
		case AuthActionTypes.AUTH_ME_ERROR:
			return {
				...state, loading: false, statuse: null, user: null, token: null, saccess: false, isAuth: false
			}
		// Проверяем пользователя при перезагрузках странцы
		// Если токена есть
		case AuthActionTypes.AUTH_ME:
			return {
				...state, loading: false, statuse: null, user: action.payload.user, name: action.payload.name, token: action.payload.token, saccess: true, isAuth: true
			}

			case AuthActionTypes.AUTH_LOGOUT:
			return {
				...state, loading: false, statuse: null, token: null, saccess: false, isAuth: false
			}
		
		default:
			return state
	}
}
