import types from '../../actionTypes';

export const menuReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_MENU:
      return payload.ids.menu;
    default:
      return state;
  }
};

export const categoriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_CATEGORIES:
      return payload.categories;
    default:
      return state;
  }
};

export const categoryReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CATEGORY:
      return payload.category;

    case types.CLEAR_CATEGORY_SELECTOR:
      return '';

    default:
      return state;
  }
};

export const filterMenuReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_MENU:
      return payload.filter;
    default:
      return state;
  }
};
