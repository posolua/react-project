import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../modules/operations';

import User from './User/index';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onCurrentUser();
  }

  render() {
    return (
      <>
        <Route component={User} />
      </>
    );
  }
}

const mapDispatch = { onCurrentUser: fetchCurrentUser };

export default connect(
  null,
  mapDispatch,
)(App);
