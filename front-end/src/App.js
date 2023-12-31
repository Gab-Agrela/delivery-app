import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './Context/MyProvider';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import OrderDetails from './Pages/OrderDetails';

function App() {
  return (
    <Provider>
      <Switch>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/customer/products">
          <Products />
        </Route>

        <Route exact path="/:user/orders">
          <Orders />
        </Route>

        <Route exact path="/:user/orders/:id">
          <OrderDetails />
        </Route>

        <Route exact path="/customer/checkout">
          <Checkout />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/admin/manage">
          <Admin />
        </Route>

      </Switch>
    </Provider>
  );
}

export default App;
