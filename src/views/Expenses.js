import React, { Component } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import Axios from 'axios';
class Expenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      month: '',
      year: 2020,
      filter: 'monthly'
    }
  }

  getCurrentMonth = () => {
    return new Date().getMonth() + 1;
  }

  componentDidMount() {
    this.setState({ month: this.getCurrentMonth() });
    this.getProductsForUser(this.getCurrentMonth(), this.state.year, this.state.filter);
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === 'month') {
      this.getProductsForUser(event.target.value, this.state.year, this.state.filter);
    } else if (event.target.name === 'year') {
      this.getProductsForUser(this.state.month, event.target.value, this.state.filter);
    }
    
  }

  changeMonth = (event) => {
    let filter = event.target.innerText.toLowerCase();
    this.setState({ filter: filter });
    if (filter === 'yearly') {
      this.getProductsForUser(0, this.state.year, filter);
    } else {
      this.getProductsForUser(this.state.month, this.state.year, filter);
    }
  }

  getProductsForUser = (month, year, filter) => {
    console.log(month, year);
    let userToken = this.props.userToken;
    var url = 'http://127.0.0.1:8091/api/v1/expenses?year=' + year;
    if (filter === 'monthly') {
      url += '&month=' + month;
    }
    console.log(url);

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

  render() {
    return (
      <div className="main-container">
        <Header {...this.props} />
        <div className="component-container">
          <h1>Expenses</h1>
          <div className="component-header component-header-left">
            <button className={"btn btn-lg " + (this.state.filter === 'monthly' ? "btn-active" : "")} onClick={this.changeMonth}>Monthly</button>
            <button className={"btn btn-lg " + (this.state.filter === 'yearly' ? "btn-active" : "")} onClick={this.changeMonth}>Yearly</button>
            <div className="filter" style={(this.state.filter === 'yearly' ? {display: 'none'} : {})}>
              <label htmlFor="filter">Choose month </label>
              <select id="filter" name="month" value={this.state.month} onChange={this.handleOnChange}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="filter">Choose year </label>
              <select id="filter" name="year" value={this.state.year} onChange={this.handleOnChange}>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>
          <Table />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);