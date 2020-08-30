import React, { Component } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';

export default class Products extends Component {
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
    let m = new Date().getMonth();
    this.setState({ month: this.state.months[m] })
  }

  componentDidMount() {
    this.getCurrentMonth();
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: parseInt(event.target.value) })
  }

  changeMonth = (event) => {
    this.setState({ filter: event.target.innerText.toLowerCase() });
    
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
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="filter">Choose year </label>
              <select id="filter" name="year" value={this.state.year} onChange={this.handleOnChange}>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
              </select>
            </div>
          </div>
          <Table />
        </div>
      </div>
    )
  }
}
