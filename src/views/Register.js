import React, { Component } from 'react';
import { connect } from "react-redux";
import RegisterForm from '../components/RegisterForm';
import { authenticateUser } from "../redux/actions/authActions";
import Axios from "axios"
import '../assets/css/auth.css';

class Register extends Component {
  handleSubmit = (user) => {
    console.log(user);
    Axios.post('http://127.0.0.1:8090/api/v1/auth/register', user)
      .then(res => {
        console.log(res);
        localStorage.setItem('user', res.data.token);
        this.props.authenticateUser(res.data.token, 'REGISTER');
        this.props.history.push('/dashboard/products');
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="main-container">
        <RegisterForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  authenticateUser: (user, type) => {
    dispatch(authenticateUser(user, type));
  }
});

export default connect(null, mapDispatchToProps)(Register);