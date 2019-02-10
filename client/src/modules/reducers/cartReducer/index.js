import { combineReducers } from 'redux';
import { ids, amount } from './cartReducer';

export default combineReducers({
  ids,
  amount,
});
