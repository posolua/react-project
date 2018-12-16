import React, { Component } from 'react';

import menuList from './config/menu.json';
import Table from './TableOrderHistory/index';

import Header from './Header/index';

import FilterMenu from './FilterMenu/index';
import Menu from './Menu/index';

// forms
import SignIn from './Sign-in/index';
import SignUp from './Sign-up/index';

// reviews
import NodeEditor from './NoteEditor/index';
import NodeList from './NodeList/index';

const filterMenu = filter =>
  menuList.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

class App extends Component {
  state = {
    notes: [],
    filter: '',
  };

  handleSubmitNodeEditor = (text, rate) => {
    this.setState(prevState => ({
      notes: [{ id: Date.now(), text, rate }, ...prevState.notes],
    }));
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    const { notes, filter } = this.state;

    const filteredMenu = filterMenu(filter);

    return (
      <div>
        <Header />
        <hr />
        <Table />
        <hr />
        <FilterMenu
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <Menu menuList={filteredMenu} />
        <hr />
        <SignIn />
        <SignUp />
        <hr />
        <NodeEditor onSubmit={this.handleSubmitNodeEditor} />
        <NodeList notes={notes} />
      </div>
    );
  }
}

export default App;
