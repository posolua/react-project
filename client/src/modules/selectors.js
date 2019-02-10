import { createSelector } from 'reselect';

const getMenuIds = state => state.menu;

const getCategories = state => state.categories;

const getCategory = state => state.category;

const getEntitiesMenu = state => state.entities.menu;

const getFilter = state => state.filter;

const getCartIds = state => state.cart.ids;

const getCartAmount = state => state.cart.amount;

const getMenu = state => {
  const ids = getMenuIds(state);
  const menuEnt = getEntitiesMenu(state);

  return ids.map(id => menuEnt[id]);
};

const getFilteredMenuAndCategory = createSelector(
  [getFilter, getMenu, getCategory],
  (filter, menu, category) => {
    if (filter && category) {
      const byFilter = menu.filter(item =>
        item.name.toLowerCase().includes(filter),
      );
      return byFilter.filter(item => item.category === category);
    }

    if (category) return menu.filter(item => item.category === category);
    if (filter)
      return menu.filter(item => item.name.toLowerCase().includes(filter));

    return menu;
  },
);

export const getListCart = createSelector(
  [getEntitiesMenu, getCartIds, getCartAmount],

  (menuEnt, ids, amount) =>
    ids.map(id => ({ ...menuEnt[id], amount: amount[id] })),
);

// for session

export const getAuthenticated = state => state.session.isAuthenticated;

export const getUser = state => state.session.user;

export const getToken = state => state.session.token;

export {
  getMenuIds,
  getCategories,
  getCategory,
  getFilteredMenuAndCategory,
  getFilter,
};
