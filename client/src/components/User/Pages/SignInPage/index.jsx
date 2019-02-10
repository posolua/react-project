import React, { Component } from 'react';
import SignInForm from '../../SignInForm/SignInForm';
import withAuth from '../../Hoc/withAuth';

class SignIn extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Please enter your credentials
        </h1>
        <SignInForm />
      </div>
    );
  }
}

export default withAuth(SignIn);
