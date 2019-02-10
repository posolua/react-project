import React from 'react';

const AccountDataUpdate = () => (
  <form onSubmit={() => null}>
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" />

    <label htmlFor="phone">Phone:</label>
    <input type="phone" name="phone" />

    <label htmlFor="email">Email:</label>
    <input type="text" name="email" />

    <button type="submit">Update</button>
  </form>
);

export default AccountDataUpdate;
