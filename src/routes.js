import React from 'react';
import {Route ,browserHistory} from 'react-router';
import Try from './components/Try';
import App from './components/App';

export default (
	<Route>
		<Route path ='/' component = {App} />
 	</Route>
);