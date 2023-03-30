import {RouterType} from '../utils/RouterConst'
import FilmPage from '../pages/FilmPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import MyPage from '../pages/MyPage'


export const publickRouters = [
	{
		path: RouterType.FILM_PAGE,
		Component: FilmPage
	},
	{
		path: RouterType.LOGI_ROUTER,
		Component: LoginPage
	},
	{
		path: RouterType.MAIN_PAGE,
		Component: MainPage
	},
]

export const privateRouters = [
	{
		path: RouterType.FILM_PAGE,
		Component: FilmPage
	},
	{
		path: RouterType.MY_PAGE,
		Component: MyPage
	},
	{
		path: RouterType.MAIN_PAGE,
		Component: MainPage
	},
]