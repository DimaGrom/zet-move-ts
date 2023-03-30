export interface IUser {
	id: string;
	name: string;
	password: string;
}

export interface IAuthState {
	error: string | null;
	loading: boolean;	
	statuse: number | null;
	user: null | IUser;
	token: null | string;
}

export enum AuthActionTypes {
	AUTH = 'AUTH',
	AUTH_ERROR = 'AUTH_ERROR',
	AUTH_SUCCESS = 'AUTH_SUCCESS',
}

interface AythAction {
	type: AuthActionTypes.AUTH;
	payload: number | null;
}

interface AythErrorAction {
	type: AuthActionTypes.AUTH_ERROR;
}

interface AythSuccessAction {
	type: AuthActionTypes.AUTH_SUCCESS;
	payload: null | IUser;
}

export type AythActions = 
	AythAction |
	AythErrorAction |
	AythSuccessAction