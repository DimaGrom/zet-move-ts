import React, {useEffect, useState} from 'react'
import '../../styles/main.css'
import './LoginForm.css'
import closeImg from '../../icons/close4.png'
import checkTrue from '../../icons/checkTrue.png'
import eyeopenImg from '../../icons/eye_open2.png'
import eyecloseImg from '../../icons/eye_close.png'
import checkFalse from '../../icons/checkFals.png'
import {useActions} from '../../hooks/useAction'
import {useTypedSelector} from '../../hooks/useTypedSelector'

interface ILoginFormProps {
	setUserActive: (a:boolean) => void;
	setToggle: (a: boolean) => void;
	login: boolean;
	setLogin: (a:boolean) => void;
	registrater: boolean;
	setRegister: (a:boolean) => void;
}

export const LoginForm: React.FC<ILoginFormProps> = (props) => {

	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [typePassword, setTypePassword] = useState<string>('password')
	const {authLoginActionCreate, authRegisterActionCreate} = useActions()
	const {statuse, saccess} = useTypedSelector(state => state.auth)

	// Обунляем подцветку Авторизация и Регистрация
	useEffect(() => {
		if(saccess) {
			props.setToggle(false)
			props.setUserActive(false)
		}
	}, [saccess])

	// Делает активным Авторизация
	const handleChangeLoginActive = () => {
		props.setLogin(true)
		props.setRegister(false)
	}

	// Делает активным Регистрация
	const handleChangeRegisterActive = () => {
		props.setLogin(false)
		props.setRegister(true)
	}
 
 	// Закрывает модальлное окно 
	const handleClose = () => {
		props.setUserActive(false)
		props.setToggle(false)
	}

	// Отправляем вводимые данные на сервер
	const hanleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if(props.login) {
			console.log('Авторизация')
			authLoginActionCreate(name, password)
		}

		if(props.registrater) {
			console.log('Регистрация')
			authRegisterActionCreate(name, password)
		}
	}

	//Поле име
	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	// Поле пароля
	const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	// Отвечает за видимость либо невидимость ввода пароля
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
						className={`${props.login ? 'active' : ''}`}
						onClick={handleChangeLoginActive}
					>
						Авторизация
					</span> 
					<span
						className={`${props.registrater ? 'active' : ''}`}
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
				<div className="flex-row relative">
			    <input 
			    	value={name} 
			    	onChange={handleChangeName}
			    	className='LoginForm__lf-input' 
			    	placeholder='Your username' 
			    	type='text'
			    />
			    {
					statuse === 405 && (
						<p className='LoginForm_error'>Неверный пароль или имя</p>
					)
					}
					{
						statuse === 404 && (
							<p className='LoginForm_error'>Имя пользователя занято</p>
						)
					}    
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
			    				src={eyecloseImg}
			    				alt='im'
			    				className='LoginForm__change'
			    				onClick={handleChangeTypePassword}
			    			/>
			    		) : (
			    			<img
			    				src={eyeopenImg}
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