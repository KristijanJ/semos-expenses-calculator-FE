import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class Dashboard extends Component {

  componentDidMount() {
    console.log('yes')
    if (true) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    return (
      <div>
        yo
      </div>
    )
  }
}
