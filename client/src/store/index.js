import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sessionReducer from '../modules/reducers/sessionReducer/index';
import {
  menuReducer,
  categoriesReducer,
  categoryReducer,
  filterMenuReducer,
} from '../modules/reducers/menuReducer/index';
import loadingReducer from '../modules/reducers/loadingReducer';
import errorReducer from '../modules/reducers/errorReducer';
import cartReducer from '../modules/reducers/cartReducer/index';
import entities from '../modules/reducers/entitiesReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['error'],
};

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  menu: menuReducer,
  entities,
  categories: categoriesReducer,
  category: categoryReducer,
  cart: cartReducer,
  filter: filterMenuReducer,
  loading: loadingReducer,
  error: errorReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const ware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(ware);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
