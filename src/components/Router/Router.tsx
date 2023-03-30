import React, {FC} from 'react'
import {Route, Routes, RedirectFunction} from 'react-router-dom'
import {privateRouters, publickRouters} from '../../utils/router'

export const Router: FC = () => {
	const user = false

	return (
			user  
				? (
					<Routes>
						{privateRouters.map(({path, Component}, k) => 
							<Route key={k} path={path} element={<Component />} />
						)}
					</Routes>
				) : (
					<Routes>
						{publickRouters.map(({path, Component}, k) => 
							<Route key={k} path={path} element={<Component />}/>
						)}
					</Routes>
				)
	)
}