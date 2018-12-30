import { combineReducers } from 'redux';
import data from './LibraryList.json';
import { SELECT } from './action';

export default combineReducers({
  libraries: () => data,
  selected: (state = null, { type, payload }) => {
    switch (type) {
      case SELECT:
        return payload;
      default:
        return state;
    }
  },
});
