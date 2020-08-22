import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import '../assets/css/auth.css';

export default class Login extends Component {
  render() {
    return (
      <div className="main-container">
        <LoginForm />
      </div>
    )
  }
}
