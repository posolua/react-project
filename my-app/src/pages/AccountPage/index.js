import React, { Component } from 'react';

import AccountInfo from '../../components/Account/AccountInfo/index';
import AccountEditProfile from '../../components/Account/AccountEditProfile/index';
import Avatar from '../../assets/bart.png';

class AccountPage extends Component {
  state = {
    user: {
      name: 'Bart Simpson',
      phone: '050-123-45-67',
      image: Avatar,
      mail: 'bart@gmail.com',
    },
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <h1>Account Page</h1>
        <div className="account">
          <AccountInfo user={user} />
          <AccountEditProfile />
        </div>
      </>
    );
  }
}

export default AccountPage;
