import React, { Fragment } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import UserMenu from './UserMenu';
import AppLogo from '../img/dish.png';
import avatar from '../img/bart.png';

const Header = () => (
  <Fragment>
    <Logo logoUrl="https://reactjs.org/" logoImg={AppLogo} alt="logo" />
    <Nav />
    <UserMenu userPhoto={avatar} userName="Bart Simpson" />
  </Fragment>
);
export default Header;
