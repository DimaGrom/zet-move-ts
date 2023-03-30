import {IAuthState, AuthActionTypes, AythActions} from '../../typies/userType'


const initialState: IAuthState = {
	error: null,
	loading: false,	
	statuse: null,
	user: null,
	token: null,
}

export const authReducer = (state = initialState, action: AythActions): IAuthState => {
	switch (action.type) {
		case AuthActionTypes.AUTH:
			return {
				...state, loading: true, statuse: action.payload
			}
		
		default:
			return state
	}
}