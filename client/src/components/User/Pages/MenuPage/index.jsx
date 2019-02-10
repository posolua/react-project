import React, { Component } from 'react';

import Menu from '../../Menu/MenuContainer';
import FilterMenu from '../../FilterMenu/FilterContainer';
import Options from '../../Options/OptionsContainer';

class MenuPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>MenuPage</h2>
        <FilterMenu />
        <hr />

        <Options />
        <hr />

        <Menu />
      </div>
    );
  }
}

export default MenuPage;
