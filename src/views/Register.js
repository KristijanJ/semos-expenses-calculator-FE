import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm';
import '../assets/css/auth.css';

export default class Login extends Component {
  render() {
    return (
      <div className="main-container">
        <RegisterForm />
      </div>
    )
  }
}
