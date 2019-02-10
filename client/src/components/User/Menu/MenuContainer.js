import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import View from './index';
import {
  getFilteredMenuAndCategory,
  getAuthenticated,
} from '../../../modules/selectors';
import { fetchSuccessMenu } from '../../../modules/operations';
import { clearCategorySelector, addToCart } from '../../../modules/actions';

class MenuContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchSuccessMenu();
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.location.search) {
      this.props.clearCategorySelector();
      return true;
    }
    if (nextProps.location.search) {
      return true;
    }
    return false;
  }

  render() {
    return <View {...this.props} />;
  }
}

const mapStateToProps = state => ({
  menu: getFilteredMenuAndCategory(state),
  isAuthenticated: getAuthenticated(state),
});

const mapDispatch = { fetchSuccessMenu, clearCategorySelector, addToCart };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatch,
  )(MenuContainer),
);
