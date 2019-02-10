import React, { Component } from 'react';
import SignUpForm from '../../SignUpForm/SignUpForm';
import withAuth from '../../Hoc/withAuth';

class SignUp extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Create your account for free
        </h1>
        <SignUpForm />
      </div>
    );
  }
}

export default withAuth(SignUp);
