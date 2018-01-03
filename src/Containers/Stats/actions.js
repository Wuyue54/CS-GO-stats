import {
  PLAYER_STATS_LOAD,
  PLAYER_STATS_LOAD_SUCCESS,
  PLAYER_STATS_LOAD_FAILED
} from './constants';

export function playerStatsLoad (steamId) {
  return {
    type: PLAYER_STATS_LOAD,
    steamId
  };
}

export function playerStatsLoadSuccess (data) {
  return {
    type: PLAYER_STATS_LOAD_SUCCESS,
    data
  };
}

export function playerStatsLoadFailed (error) {
  return {
    type: PLAYER_STATS_LOAD_FAILED,
    error
  };
}
