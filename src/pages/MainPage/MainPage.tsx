import React, {FC, useEffect} from 'react'

import {useTypedSelector} from '../../hooks/useTypedSelector'
import axios from 'axios'

const uniqid = require("uniqid") 



export const MainPage: FC = () => {

	useEffect(() => {console.log('This is MainPage: React.FC')}, [])

	const test = async () => {
		const request = await axios.get('https://tame-pink-puppy-boot.cyclic.app/users')
		console.log( request.data)
	}

	const neww = async () => {
		const a = {
			id: uniqid(),
			name: '111111'
		}
		const request = await axios.post('https://tame-pink-puppy-boot.cyclic.app/users', a, {
			headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
		})
        
		console.log( request.data)
	}

	return (
		<div>
			MainPage

			<div
				onClick={test}
				style={{
					width: '100%',
					margin: '50px auto',
					height: 70,
					background: 'gray',
					color: 'white',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					cursor: 'pointer'
				}}
			>
				TEST
			</div>

			<div
				onClick={neww}
				style={{
					width: '100%',
					margin: '50px auto',
					height: 70,
					background: 'gray',
					color: 'white',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					cursor: 'pointer'
				}}
			>
				NEw
			</div>

		</div>
	)
}