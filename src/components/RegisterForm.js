import React from 'react'
import { Link } from 'react-router-dom'
import FormFieldInput from './FormFieldInput'
import FormFieldSelect from './FormFieldSelect'

export default function RegisterForm() {
  return (
    <div className="auth-container">
      <div className="form">
       <FormFieldInput id="first-name" title="First Name" type="text" />
       <FormFieldInput id="last-name" title="Last Name" type="text" />
       <FormFieldInput id="email" title="Email" type="email" />
       <FormFieldInput id="date-of-birth" title="Date of Birth" type="date" />
       <FormFieldInput id="telephone" title="Telephone" type="text" />
       <FormFieldSelect id="country" title="Country" type="text" />
       <FormFieldInput id="password" title="Password" type="text" />

       <FormFieldInput value="Register" type="button" />
      </div>
      <div className="form-field">
        <p>Or if you already have an account, <Link to="/login">Sign In</Link></p>
      </div>
    </div>
  )
}
