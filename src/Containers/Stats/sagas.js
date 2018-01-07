import { call, put, takeLatest, race, take, select, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';

import { USER_INFO_LOAD } from 'Containers/App/constants';
import { steamIdSelector } from 'Containers/App/selectors';

import {
  PLAYER_STATS_LOAD,
  PLAYER_STATS_LOAD_SUCCESS
} from './constants';

import {
  playerStatsLoadSuccess,
  playerStatsLoadFailed
} from './actions';

export function * loadPlayerStatsSaga (action) {
  const url = '/api/states';
  const { steamId } = action;
  try {
    const response = yield call(axios.get, url, { params: { steamId } });
    yield put(playerStatsLoadSuccess(response.data));
  } catch (error) {
    yield put(playerStatsLoadFailed(error));
  }
}

export function * watchLoadPlayerStatsSaga () {
  yield takeLatest(PLAYER_STATS_LOAD, loadPlayerStatsSaga);
}

export function * watchPollPlayerStatsSaga () {
  while (true) {
    yield take(PLAYER_STATS_LOAD_SUCCESS);
    const steamId = yield select(steamIdSelector);
    yield call(delay, 5000);
    yield race([
      fork(loadPlayerStatsSaga, { steamId }),
      take(USER_INFO_LOAD)
    ]);
  }
}

const sagas = [
  watchLoadPlayerStatsSaga(),
  watchPollPlayerStatsSaga()
];

export default sagas;
