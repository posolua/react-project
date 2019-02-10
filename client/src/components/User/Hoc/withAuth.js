import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthenticated } from '../../../modules/selectors';

const withAuth = WrapperComponent => {
  class WithAuth extends Component {
    state = {};

    componentDidUpdate() {
      if (this.props.isAuthenticated) {
        const { from } = this.props.location.state || { from: '/' };

        this.props.history.replace(from);
      }
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  const mapState = state => ({
    isAuthenticated: getAuthenticated(state),
  });

  return connect(mapState)(WithAuth);
};

export default withAuth;
