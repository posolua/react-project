import React from 'react';
import style from './navigation.css';

import menuItems from '../config/menuItems';

const Nav = () => (
  <nav className={style.nav}>
    <ul className={style.navList}>
      {menuItems.map(item => (
        <li key={item.id}>
          <a className={style.link} href=" # ">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
