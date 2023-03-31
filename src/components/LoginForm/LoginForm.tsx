import React, {useEffect, useState} from 'react'
import '../../styles/main.css'
import './LoginForm.css'
import closeImg from '../../icons/close4.png'
import checkTrue from '../../icons/checkTrue.png'
import checkFalse from '../../icons/checkFals.png'
import {useActions} from '../../hooks/useAction'

interface ILoginFormProps {
	setUser: (a: boolean) => void;
	setToggle: (a: boolean) => void;
}

export const LoginForm: React.FC<ILoginFormProps> = (props) => {

	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [typePassword, setTypePassword] = useState<string>('password')
	const [login, setLogin] = useState<boolean>(true)
	const [registrater, setRegister] = useState<boolean>(false)
	const {authLoginActionCreate, authRegisterActionCreate} = useActions()

	const handleChangeLoginActive = () => {
		setLogin(true)
		setRegister(false)
	}

	const handleChangeRegisterActive = () => {
		setLogin(false)
		setRegister(true)
	}
 
	const handleClose = () => {
		props.setUser(false) 
		props.setToggle(false)
	}

	const hanleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if(login) {
			console.log('Авторизация')
			authLoginActionCreate(name, password)
		}

		if(registrater) {
			console.log('Регистация')
			authRegisterActionCreate(name, password)
		}

		// setName('')
		// setPassword('')
	}

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const handleChangeTypePassword = () => {
		if(typePassword === 'password') {
			setTypePassword('text')
		}

		if(typePassword === 'text') {
			setTypePassword('password')
		}
	}

	return (
		<div className='LoginForm'>
			<form
				className='LoginForm-form'
			>
				<p>
					<span 
						className={`${login ? 'active' : ''}`}
						onClick={handleChangeLoginActive}
					>
						Авторизация
					</span> 
					<span
						className={`${registrater ? 'active' : ''}`}
						onClick={handleChangeRegisterActive}
					>
						Регистрация
					</span> 
					<img 
						onClick={handleClose}
						src={closeImg}
						alt='close'
					/>	
				</p>
				<p className='line'></p>
				<div className="flex-row">
			    <input 
			    	value={name} 
			    	onChange={handleChangeName}
			    	className='LoginForm__lf-input' 
			    	placeholder='Your username' 
			    	type='text'
			    />
			  </div>
			  <div className="flex-row relative">
			    <input 
			    	value={password} 
			    	onChange={handleChangePassword}
			    	className='LoginForm__lf-input' 
			    	placeholder='Your password' 
			    	type={typePassword} 
			    />
			    {
			    	typePassword === 'password' 
			    		? (
			    			<img
			    				src={checkFalse}
			    				alt='im'
			    				className='LoginForm__change'
			    				onClick={handleChangeTypePassword}
			    			/>
			    		) : (
			    			<img
			    				src={checkTrue}
			    				alt='im'
			    				className='LoginForm__change'
			    				onClick={handleChangeTypePassword}
			    			/>
			    		)
			    }
			  </div>
			  <div className="flex-row">
			  	<button 
			  		className='LoginForm__lf-submit'
			  		onClick={hanleSubmit}
			  	>
			  		Sign Up
			  	</button>
			  </div>
			</form>


		</div>
	)
}