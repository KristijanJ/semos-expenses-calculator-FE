import React, { Component } from 'react'
import FormFieldInput from '../components/FormFieldInput'
import '../assets/css/product.css'
import { connect } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import Axios from 'axios';
import Loading from '../components/Loading';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    }
  }

  componentDidMount() {
    this.getProductForUser();
  }

  getProductForUser = () => {
    let userToken = this.props.userToken;
    if (this.props.match.params.id !== 'new') {
      Axios.get('http://127.0.0.1:8091/api/v1/products/' + this.props.match.params.id, {
            headers: {
              'Authorization': `Bearer ${userToken}`
            }
        }).then(res => {
          let p = res.data[0];
          this.setState({ product: {
            name: p.name ? p.name : '',
            description: p.description ? p.description : '',
            type: p.type ? p.type : '',
            date: p.date ? p.date : '',
            price: p.price ? p.price : '',
            owner_id: this.props.user._id
          } })
          this.props.getProduct(res.data[0]);
        }).catch(err => {
          console.log(err);
        })
    } else {
      this.setState({ product: {
        name: '',
        description: '',
        type: '',
        date: '',
        price: '',
        owner_id: this.props.user._id
      } })
    }
  }

  saveProduct = () => {
    let id = this.props.match.params.id;
    let userToken = this.props.userToken;
    let url = 'http://127.0.0.1:8091/api/v1/products';
    let method = 'POST';
    if (id !== 'new') {
      url += '/' + id;
      method = 'PUT';
    }

    Axios({
      method: method,
      url: url,
      data: this.state.product,
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    }).then(res => {
      this.props.history.push('/dashboard/products')
    }).catch(err => {
      console.log(err);
    });
  }

  handleOnChange = (event) => {
    this.setState({ product: {
      ...this.state.product,
      [event.target.name]: event.target.value
    }})
  }

  render() {
    const p = this.state.product;

    if (!p) return <Loading />;

    return (
      <div className="main-container">
        <div className="product-container">
          <div className="form">
            <FormFieldInput id="name" title="Product Name" type="text" value={p.name} handleOnChange={this.handleOnChange} />
            <FormFieldInput id="description" title="Product Description" type="text" value={p.description} handleOnChange={this.handleOnChange} />
            <FormFieldInput id="type" title="Product Type" type="text" value={p.type} handleOnChange={this.handleOnChange} />
            <FormFieldInput id="date" title="Product Date" type="date" value={p.date} handleOnChange={this.handleOnChange} />
            <FormFieldInput id="price" title="Product Price" type="number" value={p.price} handleOnChange={this.handleOnChange} />
            <FormFieldInput type="button" value={ this.props.match.params.id === 'new' ? 'Create product' : 'Save product' } handleSubmit={this.saveProduct} />
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

const mapStateToProps = state => {
  return {
    userToken: state.authReducer.userToken,
    user: state.authReducer.user,
    product: state.productReducer.product
  };
};

const mapDispatchToProps = dispatch => ({
  getProduct: (product) => {
    dispatch(getProduct(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);