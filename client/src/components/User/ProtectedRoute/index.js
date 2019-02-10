import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthenticated } from '../../../modules/selectors';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapState = state => ({
  isAuthenticated: getAuthenticated(state),
});

export default connect(mapState)(ProtectedRoute);
