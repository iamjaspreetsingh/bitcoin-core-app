import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import Query from './containers/Query';


export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route path='/latestblock' component={About}/>
				<Route path='/query' component={Query}/>

			</Switch>
		</BrowserRouter>
	)
}
