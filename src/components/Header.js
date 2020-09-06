import React, { Component } from 'react';
import '../assets/css/dashboard.css';
import { connect } from 'react-redux';

class Header extends Component {
  componentDidMount() {
    console.log(this.props.location.pathname)
  }

  render() {
    const user = this.props.user;
    return (
      <header className="header">
        <div className="btn-group">
          <button
            className={this.props.location.pathname === '/dashboard/products' ? "btn btn-solid text-bold" : "btn btn-ghost text-bold"}
            onClick={() => this.props.history.push('/dashboard/products')}>
              Products
            </button>
          <button
            className={this.props.location.pathname === '/dashboard/expenses' ? "btn btn-solid text-bold" : "btn btn-ghost text-bold"}
            onClick={() => this.props.history.push('/dashboard/expenses')}>
              Expenses
            </button>
        </div>
        <div className="user">
          <div className="user-photo">
            <img src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" width="40" height="40" alt="profile"/>
          </div>
          <div className="user-name">{`${user.first_name} ${user.last_name}`}</div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps)(Header);