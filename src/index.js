import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';


require('normalize.css');
require('./style/grid.scss');
require('./style/style.scss');

ReactDOM.render(<App /> ,document.getElementById('app'));

