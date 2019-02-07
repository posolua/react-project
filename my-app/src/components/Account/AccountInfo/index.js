import React from 'react';

const AccountInfo = ({ user: { name, phone, image, mail } }) => (
  <div>
    <h3>User Info</h3>
    <div>
      <img src={image} alt={name} className="avatar__photo" />
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>e-mail: {mail}</p>
    </div>
  </div>
);

export default AccountInfo;
