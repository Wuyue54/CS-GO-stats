import {
  PLAYER_STATS_LOAD,
  PLAYER_STATS_LOAD_SUCCESS,
  PLAYER_STATS_LOAD_FAILED
} from './constants';

const initialStatsState = {
  isLoading: false,
  playerStats: [],
  playerAchievements: [],
  error: null
};

function playerStatsReducer (state = initialStatsState, action) {
  switch (action.type) {
    case PLAYER_STATS_LOAD: {
      return {
        ...state,
        isLoading: true
      };
    }
    case PLAYER_STATS_LOAD_SUCCESS: {
      return {
        isLoading: false,
        playerStats: action.data.stats,
        playerAchievements: action.data.achievements,
        error: null
      };
    }
    case PLAYER_STATS_LOAD_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}

export default playerStatsReducer;
