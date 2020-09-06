import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormFieldInput from './FormFieldInput'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleOnChange = (event) => {
    this.setState({ user: {
      ...this.state.user,
      [event.target.name]: event.target.value
    }})
  }

  render() {
    return (
      <div className="auth-container">
        <div className="form">
          <FormFieldInput id="email" title="Email" type="email" handleOnChange={this.handleOnChange} />
          <FormFieldInput id="password" title="Password" type="password" handleOnChange={this.handleOnChange} />
          <FormFieldInput type="button" value="Sign In" handleSubmit={() => this.props.handleSubmit(this.state.user)} />
        </div>
        <div className="form-field">
          <p>Or if you don't have an account, <Link to="/register">Register</Link></p>
        </div>
      </div>
    )
  }
}
