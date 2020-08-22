import React, { Component } from 'react'
import { CountryDropdown } from 'react-country-region-selector';

export default class FormFieldSelect extends Component {
  render() {
    return (
      <div className="form-field">
        <label for={this.props.id}>{this.props.title}</label>
        <CountryDropdown />
      </div>
    )
  }
}
// <CountryDropdown onChange={(val) => this.selectCountry(val)} />
