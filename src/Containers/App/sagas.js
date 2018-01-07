import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import {
  USER_INFO_LOAD,
  GAME_SCHEMA_LOAD
} from './constants';

import {
  userInfoLoadSuccess,
  userInfoLoadFailed,

  gameSchemaLoad,
  gameSchemaLoadSuccess,
  gameSchemaLoadFailed
} from './actions';

import { playerStatsLoad } from 'Containers/Stats/actions';

const pathSelector = state => state.router.location.pathname;

export function * loadUserInfoSaga (action) {
  const url = '/api/userInfo';
  const { steamId } = action;
  try {
    const response = yield call(axios.get, url, { params: { steamId } });
    yield put(userInfoLoadSuccess(response.data));
    const currentPath = yield select(pathSelector);
    if (currentPath !== `/user/${response.data.steamid}`) {
      yield put(push(`/user/${response.data.steamid}`));
    }
    yield put(gameSchemaLoad());
    yield put(playerStatsLoad(steamId));
  } catch (error) {
    yield put(userInfoLoadFailed(error));
  }
}

export function * watchLoadUserInfoSaga () {
  yield takeLatest(USER_INFO_LOAD, loadUserInfoSaga);
}

export function * loadGameSchemaSaga () {
  const url = '/api/getSchema';
  try {
    const response = yield call(axios.get, url);
    yield put(gameSchemaLoadSuccess(response.data));
  } catch (error) {
    yield put(gameSchemaLoadFailed(error));
  }
}

export function * watchLoadGameSchemaSaga () {
  yield takeLatest(GAME_SCHEMA_LOAD, loadGameSchemaSaga);
}

const sagas = [
  watchLoadUserInfoSaga(),
  watchLoadGameSchemaSaga()
];

export default sagas;
