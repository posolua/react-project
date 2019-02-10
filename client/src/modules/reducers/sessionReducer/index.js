import { combineReducers } from 'redux';
import types from '../../actionTypes';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.SIGN_UP_SUCCESS:
    case types.SIGN_IN_SUCCESS:
      return payload.data.user;

    case types.REFRESH_CURRENT_USER_SUCCESS:
      return payload.data;

    case types.SIGN_OUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case types.SIGN_UP_SUCCESS:
    case types.SIGN_IN_SUCCESS:
    case types.REFRESH_CURRENT_USER_SUCCESS:
      return true;

    case types.SIGN_IN_ERROR:
    case types.SIGN_UP_ERROR:
    case types.SIGN_OUT_SUCCESS:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.SIGN_UP_SUCCESS:
    case types.SIGN_IN_SUCCESS:
      return payload.data.token;

    case types.SIGN_IN_ERROR:
    case types.SIGN_OUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
