import React from 'react';
import HeaderLogo from './Logo';
import Logo from '../../assets/logo.png';
import HeaderNavMenu from './NavMenu';
import HeaderUserMenu from './UserMenu';
import avatar from '../../assets/bart.png';
import '../../css/index.css';

const INITIAL_USER = [{ name: 'Bart Simpson' }];

class Header extends React.Component {
  state = {
    user: [...INITIAL_USER],
  };

  render() {
    const { user } = this.state;
    return (
      <div className="header">
        <HeaderLogo logo={Logo} width={100} height={100} />
        <HeaderNavMenu items={['menu', 'about', 'contacts', 'delivery']} />
        <HeaderUserMenu userName={user[0].name} userLogo={avatar} />
      </div>
    );
  }
}

export default Header;
