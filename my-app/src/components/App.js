import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import menuOperations from '../modules/menu/MenuOperations/index';
import categoryOperations from '../modules/category/CategoryOperations/index';

import Header from './Header/index';
import AccountPage from '../pages/AccountPage/index';
import DeliveryPage from '../pages/DeliveryPage/index';
import AboutPage from '../pages/AboutPage/index';
import ContactPage from '../pages/ContactPage/index';
import MenuListPage from '../pages/MenuListPage/index';
import MenuItemPage from '../pages/MenuItemPage/index';
import OrderHistoryPage from '../pages/OrderHistoryPage/index';

class App extends Component {
  componentDidMount() {
    const { fetchMenuItems, fetchCategoryItems } = this.props;
    fetchMenuItems();
    fetchCategoryItems();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/menu/:id" component={MenuItemPage} />
          <Route path="/menu" component={MenuListPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/contacts" component={ContactPage} />
          <Route path="/delivery" component={DeliveryPage} />
          <Route path="/orderhistory" component={OrderHistoryPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchAllMenuItems,
  fetchCategoryItems: categoryOperations.fetchAllCategoryItems,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
