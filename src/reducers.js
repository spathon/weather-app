import { combineReducers } from 'redux'

const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return Object.assign({}, state, {
        city: action.city,
        owm: action.owm,
        yahoo: action.yahoo,
        isLoading: false,
        errorMessage: false
      });
    case 'LOADING_WEATHER':
      return Object.assign({}, state, { isLoading: true });
    case 'LOADING_ERROR':
    return Object.assign({}, state, {
      isLoading: false,
      errorMessage: action.message
    });
    default:
      return state;
  }
}

const reducers = combineReducers({
  weather
})

export default reducers
