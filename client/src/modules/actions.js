import { normalize } from 'normalizr';
import schema from '../schema/index';
import types from './actionTypes';

export const refreshCurrentUserStart = () => ({
  type: types.REFRESH_CURRENT_USER_START,
});

export const refreshCurrentUserSuccess = data => ({
  type: types.REFRESH_CURRENT_USER_SUCCESS,
  payload: {
    data,
  },
});

export const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

export const fetchSuccessMenu = menu => {
  const normal = normalize(menu, [schema]);

  return {
    type: types.FETCH_SUCCESS_MENU,
    payload: {
      ids: {
        menu: Object.keys(normal.entities.menu),
      },
      entities: normal.entities,
    },
  };
};

export const fetchSuccessCategories = categories => ({
  type: types.FETCH_SUCCESS_CATEGORIES,
  payload: {
    categories,
  },
});

export const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: {
    error,
  },
});

export const focusCategory = category => ({
  type: types.CATEGORY,
  payload: {
    category,
  },
});

export const clearCategorySelector = () => ({
  type: types.CLEAR_CATEGORY_SELECTOR,
});

export const filterMenu = filter => ({
  type: types.FILTER_MENU,
  payload: {
    filter,
  },
});

export const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id,
  },
});

export const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const incrementAmount = id => ({
  type: types.INCREMENT_AMOUNT,
  payload: {
    id,
  },
});

export const decrementAmount = id => ({
  type: types.DECREMENT_AMOUNT,
  payload: {
    id,
  },
});

export const signUpRequest = () => ({
  type: types.SIGN_UP_REQUEST,
});

export const signUpSuccess = data => ({
  type: types.SIGN_UP_SUCCESS,
  payload: {
    data,
  },
});

export const signUpError = error => ({
  type: types.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const signInRequest = () => ({
  type: types.SIGN_IN_REQUEST,
});

export const signInSuccess = data => ({
  type: types.SIGN_IN_SUCCESS,
  payload: {
    data,
  },
});

export const signInError = error => ({
  type: types.SIGN_IN_ERROR,
  payload: {
    error,
  },
});

export const signOutRequest = () => ({
  type: types.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: types.SIGN_OUT_SUCCESS,
});
