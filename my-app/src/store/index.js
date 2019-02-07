import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import menuReducer from '../modules/menu/MenuReducer/index';
import categoryReducer from '../modules/category/CategoryReducer/index';

const rootReducer = combineReducers({
  menu: menuReducer,
  category: categoryReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
