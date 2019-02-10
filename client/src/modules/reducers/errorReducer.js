import types from '../actionTypes';

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;

    case types.FETCH_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default errorReducer;
