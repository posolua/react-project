import types from '../actionTypes';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;

    case types.FETCH_SUCCESS_CATEGORIES:
    case types.FETCH_SUCCESS_MENU:
    case types.FETCH_ERROR:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
