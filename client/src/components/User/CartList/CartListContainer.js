import { connect } from 'react-redux';
import View from './index';
import {
  removeFromCart,
  incrementAmount,
  decrementAmount,
} from '../../../modules/actions';
import { getListCart } from '../../../modules/selectors';

const mapState = state => ({
  orderList: getListCart(state),
});

const mapDispatch = {
  onDelete: removeFromCart,
  incrementAmount,
  decrementAmount,
};

export default connect(
  mapState,
  mapDispatch,
)(View);
