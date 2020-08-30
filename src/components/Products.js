import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';

export default class Products extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
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
          <Table />
        </div>
      </div>
    )
  }
}
