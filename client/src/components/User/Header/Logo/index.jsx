import React from 'react';
import logo from '../../assets/logo.png';
import s from './logo.module.css';

const Logo = () => (
  <div>
    <a href="/">
      <img src={logo} alt="logo" className={s.logoImg} />
    </a>
  </div>
);

export default Logo;
