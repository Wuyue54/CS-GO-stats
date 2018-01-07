import {
  USER_INFO_LOAD,
  USER_INFO_LOAD_SUCCESS,
  USER_INFO_LOAD_FAILED,

  GAME_SCHEMA_LOAD,
  GAME_SCHEMA_LOAD_SUCCESS,
  GAME_SCHEMA_LOAD_FAILED
} from './constants';

const initialState = {
  isLoading: false,
  userInfo: {},
  gameSchema: {},
  error: null
};

function appReducer (state = initialState, action) {
  switch (action.type) {
    case GAME_SCHEMA_LOAD:
    case USER_INFO_LOAD: {
      return {
        ...state,
        isLoading: true
      };
    }
    case USER_INFO_LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userInfo: action.userInfo,
        error: null
      };
    }
    case GAME_SCHEMA_LOAD_FAILED:
    case USER_INFO_LOAD_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    case GAME_SCHEMA_LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        gameSchema: action.schema,
        error: null
      };
    }
    default: {
      return state;
    }
  }
}

export default appReducer;
