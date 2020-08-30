import React, { Component } from 'react'
import FormFieldInput from '../components/FormFieldInput'
import '../assets/css/product.css'

export default class Product extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="product-container">
          <div className="form">
            <FormFieldInput id="product-name" title="Product Name" type="text" />
            <FormFieldInput id="product-description" title="Product Description" type="text" />
            <FormFieldInput id="product-type" title="Product Type" type="text" />
            <FormFieldInput id="product-date" title="Product Date" type="date" />
            <FormFieldInput id="product-price" title="Product Price" type="number" />
            <FormFieldInput type="button" value="Create Product" />
          </div>
          <div className="product-action-info">
            {
              this.props.match.params.id === 'new' ?
              <React.Fragment>
                <i className="fas fa-plus-circle fa-3x"></i>
                <p>You are creating a new product</p>
              </React.Fragment> : 
              <React.Fragment>
                <i className="far fa-edit fa-3x"></i>
                <p>You are editing an existing product</p>
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}
