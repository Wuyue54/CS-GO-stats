import {
  USER_INFO_LOAD,
  USER_INFO_LOAD_SUCCESS,
  USER_INFO_LOAD_FAILED,

  GAME_SCHEMA_LOAD,
  GAME_SCHEMA_LOAD_SUCCESS,
  GAME_SCHEMA_LOAD_FAILED
} from './constants';

export function userInfoLoad (steamId) {
  return {
    type: USER_INFO_LOAD,
    steamId
  };
}

export function userInfoLoadSuccess (userInfo) {
  return {
    type: USER_INFO_LOAD_SUCCESS,
    userInfo
  };
}

export function userInfoLoadFailed (error) {
  return {
    type: USER_INFO_LOAD_FAILED,
    error
  };
}

export function gameSchemaLoad () {
  return {
    type: GAME_SCHEMA_LOAD
  };
}

export function gameSchemaLoadSuccess (schema) {
  return {
    type: GAME_SCHEMA_LOAD_SUCCESS,
    schema
  };
}

export function gameSchemaLoadFailed (error) {
  return {
    type: GAME_SCHEMA_LOAD_FAILED,
    error
  };
}
