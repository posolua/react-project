import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import View from './index';
import { clearCategorySelector } from '../../../../modules/actions';
import { getCategory } from '../../../../modules/selectors';

class BtnClearContainer extends Component {
  state = {};

  handleBtn = () => {
    this.props.handleClearBtn();
    this.props.history.push({
      path: this.props.location.pathname,
      search: ``,
    });
  };

  render() {
    return <View {...this.props} handleBtn={this.handleBtn} />;
  }
}

const mapState = state => ({
  value: getCategory(state),
});

const mapDispatch = {
  handleClearBtn: clearCategorySelector,
};

export default withRouter(
  connect(
    mapState,
    mapDispatch,
  )(BtnClearContainer),
);
