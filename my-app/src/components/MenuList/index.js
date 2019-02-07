import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../MenuItem/index';

const MenuList = ({ menu = [], match, location }) => (
  <div className="menu-list">
    {menu.map(item => (
      <Link
        key={item.id}
        to={{
          pathname: `${match.url}/${item.id}`,
          state: { from: location },
        }}
        className="menu-item-link"
      >
        <MenuItem {...item} />
      </Link>
    ))}
  </div>
);

export default MenuList;
