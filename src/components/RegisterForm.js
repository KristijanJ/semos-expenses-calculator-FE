import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormFieldInput from './FormFieldInput'
import FormFieldSelect from './FormFieldSelect'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        dateOfBirth: '',
        telephone: '',
        country: '',
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
        <FormFieldInput id="first_name" title="First Name" type="text"  handleOnChange={this.handleOnChange} />
        <FormFieldInput id="last_name" title="Last Name" type="text"  handleOnChange={this.handleOnChange} />
        <FormFieldInput id="email" title="Email" type="email"  handleOnChange={this.handleOnChange} />
        <FormFieldInput id="dateOfBirth" title="Date of Birth" type="date"  handleOnChange={this.handleOnChange} />
        <FormFieldInput id="telephone" title="Telephone" type="text"  handleOnChange={this.handleOnChange} />
        <FormFieldSelect id="country" title="Country" type="text"  handleOnChange={this.handleOnChange} />
        <FormFieldInput id="password" title="Password" type="text"  handleOnChange={this.handleOnChange} />

        <FormFieldInput value="Register" type="button" handleSubmit={() => this.props.handleSubmit(this.state.user)} />
        </div>
        <div className="form-field">
          <p>Or if you already have an account, <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    )
  }
}
