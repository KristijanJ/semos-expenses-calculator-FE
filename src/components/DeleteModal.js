import React, { Component } from 'react';
import '../assets/css/modal.css'

export default class DeleteModal extends Component {
  render() {
    return (
      <div className="delete-modal-backdrop">
        <div className="delete-modal-container">
          <h1>Delete Product</h1>
          <p>You are about to delete this product. Are you sure tou wish to continue?</p>
          <div className="btn-group">
            <button onClick={this.props.cancel} className="btn">Cancel</button>
            <button onClick={this.props.delete} className="btn btn-solid-ghost">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}
