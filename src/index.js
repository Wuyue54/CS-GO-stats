import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import configureStore from './store';

import App from 'Containers/App';

import 'normalize.css';
import './style/grid.scss';
import './style/style.scss';

const history = createHistory();
const store = configureStore({}, history);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          { React.createElement(Component) }
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('Containers/App', () => {
    render(App);
  });
}
