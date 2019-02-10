import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './withoutAccountNav.module.css';

const WithoutAccountNav = () => (
  <nav className={s.navList}>
    <NavLink to="/signin" className={s.navLink}>
      Sign in
    </NavLink>
    <NavLink to="/signup" className={s.navLink}>
      Sign up
    </NavLink>
  </nav>
);

export default WithoutAccountNav;
