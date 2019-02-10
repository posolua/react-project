import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getCategories, getCategory } from '../../../modules/selectors';

import View from './index';
import { fetchSuccessCategories } from '../../../modules/operations';
import * as actions from '../../../modules/actions';

class OptionsContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchSuccessCategories();
  }

  handleOptionChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    return <View {...this.props} />;
  }
}

const mapState = state => ({
  categories: getCategories(state),
  value: getCategory(state),
});

const mapDispatch = {
  fetchSuccessCategories,
  handleOptionChange: actions.focusCategory,
};

export default connect(
  mapState,
  mapDispatch,
)(OptionsContainer);
