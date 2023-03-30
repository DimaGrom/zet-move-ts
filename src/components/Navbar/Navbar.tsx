import React,  {useEffect, useState} from 'react'
import '../../styles/main.css'
import './Navbar.css'
import logoImg from '../../icons/Logo.png'
import userImg from '../../icons/user.png'
import serchImg from '../../icons/serch.png'
import {useNavigate, NavLink} from 'react-router-dom'
import {RouterType} from '../../utils/RouterConst'


export const Navbar: React.FC = () => {

	const navigate = useNavigate()
	const activeStyle = {opacity: 1}
	const [toggle, setToggle] = useState(false)

	return (
		<div className="Navbar">
			<div className='container'> 
				<div className='Navbar__wrape'>

					<div className='Navbar__logo__content'>
						<img
							onClick={() => navigate(RouterType.MAIN_PAGE)}
							className='Navbar__logo'
							src={logoImg}
							alt='s'
						/>
						<div className='Navbar__burgger'>
							Burgger
						</div>
					</div>

					
					<div className='Navbar__move'>
						<NavLink 
							to={RouterType.FILM_PAGE}
							style={({isActive}) => isActive ? activeStyle : undefined}
						>
							Фильмы
						</NavLink>
						<NavLink 
							to={RouterType.FILM_PAGE}
						>
							Сериалы
						</NavLink>
						<NavLink 
							to={RouterType.FILM_PAGE}
						>
							Мультики
						</NavLink>
					</div>

					<div className='Navbar__a'>
						<div className='Navbar__serch'>
							<img
								src={serchImg}
								alt='s'
							/>
							<p>Поиск по сайту</p>
						</div>

						<div className='Navbar__dropdown'>
							<img
								onClick={() => setToggle(!toggle)}
								className={`Navbar__signIn ${toggle ? 'active' : '' }`}
								src={userImg}
								alt='s'
							/>
							<div className={`Navbar__dropdown-content ${toggle ? 'show' : ''}`}>
						    <NavLink to="#home">Войти</NavLink>
						    <NavLink to="#about">Регистрация</NavLink>
						    <NavLink to="#contact">Избранные (0)</NavLink>
						  </div>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}