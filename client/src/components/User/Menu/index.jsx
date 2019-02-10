import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './menu.module.css';

const Menu = ({ menu = [], match, location, addToCart, isAuthenticated }) => (
  <ul className={s.list}>
    {menu.map(({ id, image, name, price }) => (
      <li key={id} className={s.listItem}>
        <Link
          to={{
            pathname: `${match.url}/${id}`,
            state: { from: location },
          }}
        >
          <img src={image} alt={name} className={s.img} />
          <p>Name: {name}</p>
          <p>Price: {price}</p>
        </Link>
        {isAuthenticated && (
          <button type="button" onClick={() => addToCart(id)}>
            Add to cart
          </button>
        )}
      </li>
    ))}
  </ul>
);

export default withRouter(Menu);
