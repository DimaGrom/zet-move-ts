import React, {FC} from 'react'
import './Button.css'

type TButtonProps = {
	background?: string,
	cursor?: string,
	active?: boolean,
}


export const Button = ({
	background = 'red',
	cursor = 'pointer',
	active = false,
} : TButtonProps) => {

	console.log('active ', active)

	return (
		<button 
			
			style={{
				background,
				cursor
			}}
			className={`
				${active ? 'active' : ''}
			`}
		>
			Button
		</button>
	)
}
