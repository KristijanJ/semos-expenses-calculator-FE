import React, { Component } from 'react';
import '../assets/css/table.css';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const tableItems = this.props.products.map((p) => (
      <tbody key={p._id}>
        <tr>
          <td>{p.name}</td>
          <td>{p.type}</td>
          <td>{p.description}</td>
          <td>{p.date}</td>
          <td>{p.price ? p.price : 0} den.</td>
          <td>
            {
              this.props.actions ? 
              <React.Fragment>
                <i onClick={() => this.props.history.push('/dashboard/products/' + p._id)} className="far fa-edit"></i>
                <i onClick={() => this.props.deleteProduct(p)} className="far fa-trash-alt"></i>
              </React.Fragment> : 
              ''
            }
          </td>
        </tr>
      </tbody>
    ))

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
        {tableItems}
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products
  };
};

export default connect(mapStateToProps)(Table);