import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import Login from './views/Login';
import Register from './views/Register';
import Products from './views/Products';
import Expenses from './views/Expenses';
import Product from './views/Product';

import './App.css';

function isAuthenticated() {
  return false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

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

const mapStateToProps = state => ({
  products: state.productReducer.products,
  product: state.productReducer.product
});

const mapDispatchToProps = dispatch => ({
  // fetchAllNotes: () => {
  //   dispatch(fetchAllNotes());
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);