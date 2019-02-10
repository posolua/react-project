import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo/index';
import Nav from './Navigation/index';
import UserMenu from './UserMenu/index';
import WithoutAccountNav from './WithoutAccountNav/index';
import s from './header.module.css';

import { getAuthenticated, getUser } from '../../../modules/selectors';

const Header = ({ isAuthenticated, user }) => (
  <header className={s.header}>
    <div className={s.leftSide}>
      <Logo />
      <Nav />
    </div>
    {isAuthenticated ? <UserMenu user={user} /> : <WithoutAccountNav />}
  </header>
);

const mapState = state => ({
  isAuthenticated: getAuthenticated(state),
  user: getUser(state),
});

export default connect(mapState)(Header);
