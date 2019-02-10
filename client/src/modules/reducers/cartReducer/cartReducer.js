import types from '../../actionTypes';

export const ids = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload.id) ? state : [...state, payload.id];
    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload.id);
    default:
      return state;
  }
};

export const amount = (state = {}, { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };
    case types.INCREMENT_AMOUNT:
      return { ...state, [payload.id]: state[payload.id] + 1 };
    case types.DECREMENT_AMOUNT:
      return {
        ...state,
        [payload.id]:
          state[payload.id] > 1 ? state[payload.id] - 1 : state[payload.id],
      };
    default:
      return state;
  }
};
