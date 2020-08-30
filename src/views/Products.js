import React, { Component } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import NewProductButton from '../components/NewProductButton';

export default class Products extends Component {
  render() {
    return (
      <div className="main-container">
        <Header {...this.props} />
        <div className="component-container">
          <div className="component-header">
            <h1>Products</h1>
            <div className="filter">
              <label htmlFor="filter">Filter by: </label>
              <select id="filter">
                <option>Year</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
                <option>Latest Purchases</option>
              </select>
            </div>
          </div>
          <Table
            actions="true"
            deleteProduct={this.props.deleteProduct}
            {...this.props}
          />
        </div>
        <NewProductButton {...this.props} />
      </div>
    )
  }
}
