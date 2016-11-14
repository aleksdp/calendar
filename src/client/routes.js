import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import NotFound from './pages/not found'
import Schedule from './pages/Schedule'

export default function() // ({ dispatch, getState })
{
	return(
		<div>
			<Route path='/' component={Layout}>
				<IndexRoute component={Schedule}/>
				<Route path='*' component={NotFound}/>
			</Route>
		</div>
	)
}
