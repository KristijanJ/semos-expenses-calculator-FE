import React, { Component } from 'react';
import '../assets/css/table.css';

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Product Description</th>
            <th>Purchase Date</th>
            <th>Product Price</th>
            <th>{this.props.actions ? 'Actions' : ''}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coca-cola</td>
            <td>Drink</td>
            <td>carbonated soft drink</td>
            <td>19.04.2019</td>
            <td>75</td>
            <td>
              {
                this.props.actions ? 
                <>
                <i onClick={() => this.props.history.push('/dashboard/products/' + 1)} className="far fa-edit"></i>
                <i onClick={() => this.props.deleteProduct(1)} className="far fa-trash-alt"></i>
                </> : 
                ''
              }
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
