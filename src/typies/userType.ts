export interface IUser {
	id: string;
	name: string;
	password?: string;
	favoritFilms?: number[];
}

export interface IAuthState {
	error: string | null;
	loading: boolean;	
	name: string;
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
}

interface AythErrorAction {
	type: AuthActionTypes.AUTH_ERROR;
	payload: null | number;
}

interface AythSuccessAction {
	type: AuthActionTypes.AUTH_SUCCESS;
	payload: {name: string, user: IUser}
}

export type AythActions = 
	AythAction |
	AythErrorAction |
	AythSuccessAction