import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Products from '../components/Products';
import NewProductButton from '../components/NewProductButton';


export default class Dashboard extends Component {

  componentDidMount() {
    console.log('yes')
    if (true) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    return (
      <div>
        <Products />
        <NewProductButton />
      </div>
    )
  }
}
