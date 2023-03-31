import {IAuthState, AuthActionTypes, AythActions} from '../../typies/userType'


const initialState: IAuthState = {
	error: null,
	loading: false,	
	name: '',
	statuse: null,
	user: null,
	token: null,
}

export const authReducer = (state = initialState, action: AythActions): IAuthState => {
	switch (action.type) {
		case AuthActionTypes.AUTH:
			return {
				...state, loading: true, statuse: null
			}

		case AuthActionTypes.AUTH_SUCCESS:
			return {
				...state, loading: true, statuse: null, user: action.payload.user, name: action.payload.name
			}

		case AuthActionTypes.AUTH_ERROR:
			return {
				...state, loading: true, statuse: action.payload
			}
		
		default:
			return state
	}
}