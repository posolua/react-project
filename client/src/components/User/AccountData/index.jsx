import React from 'react';

const hoc = WrapperComponent =>
  class hoct extends React.Component {
    state = {};

    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
const AccountData = ({ src, name, phone, email }) => (
  <div>
    <img src={src} alt={name} />
    <p>Name: {name}</p>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
  </div>
);

export default hoc(AccountData);
