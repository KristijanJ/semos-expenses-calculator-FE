import React, { Component } from 'react'
import { CountryDropdown } from 'react-country-region-selector';

export default class FormFieldSelect extends Component {
  render() {
    return (
      <div className="form-field">
        <label htmlFor={this.props.id}>{this.props.title}</label>
        <CountryDropdown name="country" value={this.props.value} onChange={(val) => this.props.handleOnChangeCountry(val)} />
      </div>
    )
  }
}
