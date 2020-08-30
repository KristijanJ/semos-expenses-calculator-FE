import React, { Component } from 'react'

export default class NewProductButton extends Component {
  render() {
    return (
      <button className="btn new-product-btn" onClick={() => this.props.history.push('/dashboard/products/new')}>
        New product
      </button>
    )
  }
}
