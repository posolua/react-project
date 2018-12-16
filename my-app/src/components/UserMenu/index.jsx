import React from 'react';
import style from './userMenu.css';

const UserMenu = ({ src, name }) => (
  <div className={style.userMenu}>
    <img src={src} width="100" height="100" alt="Avatar" />
    <p>{name}</p>
  </div>
);

export default UserMenu;
