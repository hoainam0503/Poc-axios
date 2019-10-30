import immutable from 'immutable';

import {
  GET_LIST_DATA_REQUEST,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_ERROR,
} from './action.js';

const init = () => {
  const initValue = immutable.fromJS({
    list: undefined,
  });
  return initValue.set('list', []);
};

export default function (state = init(), action) {
  switch (action.type) {
    case "GET_LIST_DATA_REQUEST":
      return state.set('list', action.payload);
    case GET_LIST_DATA_SUCCESS:
      return state.set('list', action.payload);
    case GET_LIST_DATA_ERROR:
      return state.set('list', []);
    default:
      return state
  }
}