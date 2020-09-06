import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import { connect } from "react-redux";

import Login from './views/Login';
import Register from './views/Register';
import Products from './views/Products';
import Expenses from './views/Expenses';
import Product from './views/Product';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard/products/:id" component={Product} />
          <PrivateRoute path="/dashboard/products" component={Products} />
          <PrivateRoute path="/dashboard/expenses" component={Expenses} />
          <Redirect to="/dashboard/products" />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(App);