import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSignOut } from '../../../../../modules/operations';

import cart from '../../../assets/cart.png';

const Dropdown = ({ dropdown, onSignOut }) => (
  <div className={dropdown}>
    <NavLink to="/account">Account</NavLink>
    <NavLink to="/order-history">Order History</NavLink>
    <NavLink to="/meal-planner">MealPlanner</NavLink>
    <NavLink to="/cart">
      <img src={cart} alt="cart" />
    </NavLink>

    <button type="button" onClick={onSignOut}>
      Sign out
    </button>
  </div>
);

const mapDispatch = { onSignOut: fetchSignOut };

export default connect(
  null,
  mapDispatch,
)(Dropdown);
