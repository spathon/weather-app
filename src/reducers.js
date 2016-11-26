import { combineReducers } from 'redux'

const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return Object.assign({}, state, {
        city: action.city
      });
    default:
      return state;
  }
}

const reducers = combineReducers({
  weather
})

export default reducers
