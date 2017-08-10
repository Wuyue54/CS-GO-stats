import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import App from 'components/App';
import routes from './routes';

import 'normalize.css';
import './style/grid.scss';
import './style/style.scss';

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));
