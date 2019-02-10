import React from 'react';
import s from './index.module.css';

const CartList = ({ orderList, onDelete, decrementAmount, incrementAmount }) =>
  console.log(orderList) || (
    <ul className={s.list}>
      {orderList.map(order => (
        <li key={order.id} className={s.listItem}>
          <p>Name: {order.name}</p>
          <div className={s.amountBlock}>
            <button type="button" onClick={() => decrementAmount(order.id)}>
              -
            </button>
            <p>amount: {order.amount}</p>
            <button type="button" onClick={() => incrementAmount(order.id)}>
              +
            </button>
          </div>
          <button type="button" onClick={() => onDelete(order.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

export default CartList;
