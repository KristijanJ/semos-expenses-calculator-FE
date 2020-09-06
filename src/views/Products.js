import React, { Component } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import NewProductButton from '../components/NewProductButton';
import DeleteModal from '../components/DeleteModal';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Axios from 'axios';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeleteModal: false,
      product: null,
      filter: null,
    }
  }

  componentDidMount() {
    this.getProductsForUser();
  }

  getProductsForUser = (filter) => {
    let userToken = this.props.userToken;
    var url = 'http://127.0.0.1:8091/api/v1/products';
    if (filter) {
      url += '?filter=' + filter;
    }
    
    Axios.get(url, {
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
      }).then(res => {
        console.log(res.data);
        this.props.getProducts(res.data);
      }).catch(err => {
        console.log(err);
      })
  }

  toggleDeleteModal = (p) => {
    this.setState({ 
      showDeleteModal: !this.state.showDeleteModal,
      product: p ? p : ''
    });
  }

  deleteProduct = () => {
    let userToken = this.props.userToken;
    Axios.delete('http://127.0.0.1:8091/api/v1/products/' + this.state.product._id, {
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
      }).then(res => {
        this.setState({ 
          showDeleteModal: false,
          product: ''
        });
        this.getProductsForUser();
      }).catch(err => {
        console.log(err);
      })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === 'filter') {
      this.getProductsForUser(event.target.value);
    }
  }

  render() {
    return (
      <div className="main-container">
        <Header {...this.props} />
        <div className="component-container">
          <div className="component-header">
            <h1>Products</h1>
            <div className="filter">
              <label htmlFor="filter">Sort by: </label>
              <select id="filter" name="filter" onChange={this.handleOnChange}>
                <option value="none">None</option>
                <option value="highest-price">Highest Price</option>
                <option value="lowest-price">Lowest Price</option>
                <option value="latest-purchases">Latest Purchases</option>
              </select>
            </div>
          </div>
          <Table
            actions="true"
            deleteProduct={this.toggleDeleteModal}
            {...this.props}
          />
        </div>
        <NewProductButton {...this.props} />
        {this.state.showDeleteModal ? <DeleteModal delete={this.deleteProduct} cancel={this.toggleDeleteModal} {...this.props} /> : ''}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userToken: state.authReducer.userToken,
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts: (products) => {
    dispatch(getProducts(products));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);