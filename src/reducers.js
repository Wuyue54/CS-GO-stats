import { combineReducers } from 'redux';
import { LOCATION_CHANGE, routerReducer } from 'react-router-redux';
import appReducer from 'Containers/App/reducer';
import statsReducer from 'Containers/Stats/reducer';

const routeInitialState = {
  locationBeforeTransitions: null
};

function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE: {
      return {
        ...state,
        locationBeforeTransitions: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

export default function createReducer () {
  return combineReducers({
    router: routerReducer,
    route: routeReducer,
    app: appReducer,
    playerstats: statsReducer
  });
}
