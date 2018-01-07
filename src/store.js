import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import createReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore (initialState, history) {
  const sagaMiddleware = createSagaMiddleware();
  const router = routerMiddleware(history);

  const enhancer = compose(
    applyMiddleware(router, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );

  const store = createStore(createReducer(), initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  // Hot reload reducers (requires Webpack HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers();

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
