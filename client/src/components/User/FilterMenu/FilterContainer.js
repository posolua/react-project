import { connect } from 'react-redux';

import View from './index';
import { getFilter } from '../../../modules/selectors';
import { filterMenu } from '../../../modules/actions';

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatch = { handleChangeFilter: filterMenu };

export default connect(
  mapStateToProps,
  mapDispatch,
)(View);
