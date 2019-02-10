import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header/index';

import MenuPage from './Pages/MenuPage/index';
import MenuItemPage from './Pages/MenuItemPage/index';
import OrderHistoryPage from './Pages/OrderHistoryPage/index';
import AboutUsPage from './Pages/AboutUsPage/index';
import ContactPage from './Pages/ContactPage/index';
import DeliveryPage from './Pages/DeliveryPage/index';
import MainPage from './Pages/MainPage/index';
import AccountPage from './Pages/AccountPage/index';
import MealPlanner from './Pages/MealPlannerPage/index';
import CartPage from './Pages/CartPage/index';
import SignIn from './Pages/SignInPage/index';
import SignUp from './Pages/SignUpPage/index';

import ProtectedRoute from './ProtectedRoute/index';

const User = () => (
  <>
    <Header />
    <hr />
    <Switch>
      <Route path="/menu/:id" component={MenuItemPage} />
      <Route path="/menu" component={MenuPage} />
      <ProtectedRoute
        exact
        path="/order-history"
        component={OrderHistoryPage}
      />
      <Route exact path="/about" component={AboutUsPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/delivery" component={DeliveryPage} />
      <ProtectedRoute exact path="/account" component={AccountPage} />
      <Route exact path="/meal-planner" component={MealPlanner} />
      <ProtectedRoute path="/cart" component={CartPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />

      <Route component={MainPage} />
    </Switch>
  </>
);
export default User;
