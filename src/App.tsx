import React, {useEffect, useState} from 'react'
import './styles/main.css'
import './App.css'
import Router from './components/Router'
import Navbar from './components/Navbar'
import {useActions} from './hooks/useAction'
import {useTypedSelector} from './hooks/useTypedSelector'

const App: React.FC = () => {
	const {authMeActionCreater} = useActions()
	const {isAuth} = useTypedSelector(state => state.auth)

	useEffect(() => {console.log('This is App: React.FC')}, [])

	useEffect(() => {authMeActionCreater()}, [isAuth])

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