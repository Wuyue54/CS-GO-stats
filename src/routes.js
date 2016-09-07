import React from 'react';
import {Route} from 'react-router';
import Home from './components/Home';
import Try from './components/Try';
import App from './components/App';

export default (
	<Route component={App} >
		<Route path ='/' component = {Home} />
 	</Route>
);