import axios from 'axios'
import {IUser} from '../typies/userType'

const URL = 'https://crimson-badger-tux.cyclic.app'

export const checkUserByName = async (name: string) => {
	const request: any = await axios.get(`${URL}/users`)
	const response: undefined | IUser = await request.data.find((f: IUser) => f.name === name)
	return response
}

export const createNewUser = async (user: IUser) => {
	await axios.post(`${URL}/users`, user)
}

