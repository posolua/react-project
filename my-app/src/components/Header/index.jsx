import React from 'react';
import Logo from '../Logo/index';
import Nav from '../Navigation/index';
import UserMenu from '../UserMenu/index';
import logo from '../img/dish.png';
import avatar from '../img/bart.png';
import style from './header.css';

const Header = () => (
  <header className={style.header}>
    <div className={style.leftSide}>
      <Logo src={logo} />
      <Nav />
    </div>
    <UserMenu name="Bart Simpson" src={avatar} />
  </header>
);

export default Header;
