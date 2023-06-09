import React,  {useEffect, useState} from 'react'
import '../../styles/main.css'
import './Navbar.css'
import LoginForm from '../LoginForm'
import logoImg from '../../icons/Logo.png'
import userImg from '../../icons/user.png'
import serchImg from '../../icons/serch.png'
import closeImage from '../../icons/delete_2.png'
import movies from '../../icons/play-movies.png'
import soap from '../../icons/play-soap.png'
import cortoon from '../../icons/play-cortoon.png'
import heart from '../../icons/heart_03.png'
import {useNavigate, NavLink} from 'react-router-dom'
import {RouterType} from '../../utils/RouterConst'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useAction'


export const Navbar: React.FC = () => {

	const {logoutActionCreater} = useActions()
	const navigate = useNavigate()
	const activeStyle = {opacity: 1}
	const [toggle, setToggle] = useState(false)
	const [toggleBurger, setToggelBurger] = useState(false)

	const [userActive, setUserActive] = useState(false)
	const [login, setLogin] = useState<boolean>(false)
	const [registrater, setRegister] = useState<boolean>(false)

	const {user, name, isAuth} = useTypedSelector(state => state.auth)

	// Одна буква имени пользователя
	const oneLette = (a: string) => {
		const b = a.split(/\s+/).join('')
		return b[0]
	}

	const handleLogo = () => {
		navigate(RouterType.MAIN_PAGE)
		setToggle(false)
		setToggelBurger(false)
	}

	const handleSignin = () => {
		setUserActive(true)
		setToggle(false)
		setLogin(true)
		setRegister(false)
	}

	// Выход из личного кабинета
	const handleLogOut = () => {
		logoutActionCreater()
		setToggle(false)
	}

	const handleRegiser = () => {
		setUserActive(true)
		setToggle(false)
		setRegister(true)
		setLogin(false)
	}

	const handleBurger = () => {
		setToggle(false)
		setToggelBurger(!toggleBurger)
	}

	const handleAvtorisation = () => {
		setToggle(!toggle)
		setToggelBurger(false)
	}

	const handleSearch = () => {
		console.log('Поиск по сайту')
		setToggelBurger(false)
	}
 
	return (
		<div className="Navbar">
			<div className='container'> 
				<div className='Navbar__wrape'>

					<div className='Navbar__logo__content'>
						<img
							onClick={handleLogo}
							className='Navbar__logo'
							src={logoImg}
							alt='s'
						/>
						<div 
							onClick={handleBurger}
							className='Navbar__burgger-cover'
							>
							<div className={`Navbar__burgger ${toggleBurger ? 'active' : ''}`}	>	
							</div>
						</div>
					</div>

					<div className={`Navbar__burgger_menu ${toggleBurger ? 'active' : ''}`}>				
						<div className='Navbar__move'>
							<NavLink 
								onClick={() => setToggelBurger(false)}
								to={RouterType.FILM_PAGE}
								style={({isActive}) => isActive ? activeStyle : undefined}
							>	
								<img src={movies} alt='icon' />
								Фильмы
							</NavLink>
							<NavLink 
								onClick={() => setToggelBurger(false)}
								to={RouterType.SERIALS_PAGE}
								style={({isActive}) => isActive ? activeStyle : undefined}
							>	
								<img src={soap} alt='icon' />
								Сериалы
							</NavLink>
							<NavLink 
								onClick={() => setToggelBurger(false)}
								to={RouterType.CARTOONS_PAGE}
								style={({isActive}) => isActive ? activeStyle : undefined}
							>	
								<img src={cortoon} alt='icon' />
								Мультики
							</NavLink>
							{isAuth && 
								<NavLink 
									onClick={() => setToggelBurger(false)}
									to={RouterType.FILM_PAGE}
								>	
									<img src={heart} alt='icon' />
									Избранные
								</NavLink>
							}	
							<img
								className='close'
								onClick={handleBurger}
								src={closeImage}
								alt='close'
							/>	
						</div>
					</div>
		
					<div className={`Navbar__move ${isAuth ? 'isAuth' : ''}`}>
						<NavLink 
							to={RouterType.FILM_PAGE}
							style={({isActive}) => isActive ? activeStyle : undefined}
						>	
							Фильмы
						</NavLink>
						<NavLink 
							to={RouterType.SERIALS_PAGE}
							style={({isActive}) => isActive ? activeStyle : undefined}
						>
							Сериалы
						</NavLink>
						<NavLink 
							to={RouterType.CARTOONS_PAGE}
							style={({isActive}) => isActive ? activeStyle : undefined}
						>
							Мультики
						</NavLink>
						{isAuth && 
							<NavLink 
								to={RouterType.FILM_PAGE}
							>
								Избранные
							</NavLink>
						}		
					</div>

					<div 
						className='Navbar__a'
						onClick={handleSearch}
					>
						<div className='Navbar__serch'>
							<img
								src={serchImg}
								alt='s'
							/>
							<p>Поиск по сайту</p>
						</div>

						<div className='Navbar__dropdown'>
							{ user 
								? (
									<div
										onClick={() => setToggle(!toggle)}
										className={`Navbar__signIn ${toggle ? 'active' : '' }`}
									>
										{oneLette(name)}
									</div>
								) : (
									<img
										onClick={handleAvtorisation}
										className={`Navbar__signIn ${toggle ? 'active' : '' }`}
										src={userImg}
										alt='s'
									/>
								)
							}
							<div className={`Navbar__dropdown-content ${toggle ? 'show' : ''}`}>
								{!isAuth
									? (
										<div 
								    	onClick={handleSignin}
								    > 
								    	<p>Войти</p>
								    </div>
									) : (
										<div 
								    	onClick={handleLogOut}
								    > 
								    	<p>Выйти</p>
								    </div>
									)
								}
								{!isAuth &&
									<div 
							    	onClick={handleRegiser}
							    > 
							    	<p>Регистрация</p>
							    </div>
								}	
						    {isAuth &&
						    	<NavLink to="#contact">
							    	Избранные (0)
							    </NavLink>
						    }
						  </div>
						</div>

					</div>

				</div>
			</div>

			{userActive && <LoginForm 
				setUserActive={setUserActive}
				setToggle={setToggle}  
				login={login} 
				setLogin={setLogin}
				registrater={registrater} 
				setRegister={setRegister}
			/>}
		</div>
	)
}