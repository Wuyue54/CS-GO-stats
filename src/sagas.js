import { all } from 'redux-saga/effects';
import appSagas from 'Containers/App/sagas';
import statsSagas from 'Containers/Stats/sagas';

export default function * rootSaga () {
  yield all([
    ...appSagas,
    ...statsSagas
  ]);
}
