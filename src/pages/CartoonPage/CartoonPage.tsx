import React, {useEffect} from 'react'
import '../../styles/main.css'

export const CartoonPage: React.FC = () => {

	useEffect(() => {console.log('This is CartoonPage: React.FC')}, [])

	return (
		<div className='CartoonPage'>
			CartoonPage
		</div>
	)
}