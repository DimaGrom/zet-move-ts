import React, {useEffect, useState} from 'react'
import './styles/main.css'
import './App.css'
import Router from './components/Router'
import Navbar from './components/Navbar'

const App: React.FC = () => {

	useEffect(() => {console.log('This is App: React.FC')}, [])


	return (
		<div className='base font'>
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Router />
				</div>	
			</div>
		</div>
	)
}

export default App