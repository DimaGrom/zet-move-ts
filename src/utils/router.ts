import {RouterType} from '../utils/RouterConst'
import CartoonPage from '../pages/CartoonPage'
import FilmPage from '../pages/FilmPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import MyPage from '../pages/MyPage'
import SerialPage from '../pages/SerialPage'


export const publickRouters = [
	{
		path: RouterType.CARTOONS_PAGE,
		Component: CartoonPage
	},
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
	{
		path: RouterType.SERIALS_PAGE,
		Component: SerialPage
	},
]

export const privateRouters = [
	{
		path: RouterType.CARTOONS_PAGE,
		Component: CartoonPage
	},
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
	{
		path: RouterType.SERIALS_PAGE,
		Component: SerialPage
	},
]