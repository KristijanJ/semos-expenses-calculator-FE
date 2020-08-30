import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormFieldInput from './FormFieldInput'

export default class LoginForm extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="form">
          <FormFieldInput id="email" title="Email" type="email" />
          <FormFieldInput id="password" title="Password" type="password" />
          <FormFieldInput type="button" value="Sign In" />
        </div>
        <div className="form-field">
          <p>Or if you don't have an account, <Link to="/register">Register</Link></p>
        </div>
      </div>
    )
  }
}
