export interface IUser {
	id: string;
	name: string;
	password?: string;
	favoritFilms?: number[];
	token: null | string;
}

export interface IAuthState {
	error: string | null;
	isAuth: boolean;
	loading: boolean;	
	name: string;
	saccess: boolean;
	statuse: number | null;
	token: null | string;
	user: null | IUser;	
}

export enum AuthActionTypes {
	AUTH_REGISTER = 'AUTH_REGISTER',
	AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR',
	AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS',

	AUTH_LOGI = 'AUTH_LOGI',
	AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR',
	AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',

	AUTH_ME = 'AUTH_ME',
	AUTH_ME_ERROR = 'AUTH_ME_ERROR',

	AUTH_LOGOUT = 'AUTH_LOGOUT',
}

interface AythRegisterAction {
	type: AuthActionTypes.AUTH_REGISTER;
}

interface AythRegisterErrorAction {
	type: AuthActionTypes.AUTH_REGISTER_ERROR;
	payload: null | number;
}

interface AythRegisterSuccessAction {
	type: AuthActionTypes.AUTH_REGISTER_SUCCESS;
	payload: {name: string, user: IUser, token: string}
}

interface AythLoginAction {
	type: AuthActionTypes.AUTH_LOGI;
}

interface AythLoginErrorAction {
	type: AuthActionTypes.AUTH_LOGIN_ERROR;
	payload: null | number;
}

interface AythLoginSuccessAction {
	type: AuthActionTypes.AUTH_LOGIN_SUCCESS;
	payload: {name: string, user: IUser, token: string}
}

interface AythMeAction {
	type: AuthActionTypes.AUTH_ME;
	payload: {name: string, user: IUser, token: string}
}

interface AythMeEorrAction {
	type: AuthActionTypes.AUTH_ME_ERROR;
}

interface AythLogoutAction {
	type: AuthActionTypes.AUTH_LOGOUT;
}

export type AythActions = 
	AythRegisterAction |
	AythRegisterErrorAction |
	AythRegisterSuccessAction |
	AythLoginAction |
	AythLoginErrorAction |
	AythLoginSuccessAction |
	AythMeAction |
	AythMeEorrAction |
	AythLogoutAction