import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Loading from './Loading';
import axios from 'axios';
import { compose } from 'redux';
import { writeUser } from "../redux/actions/authActions";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  state = {
    loaded: false,
    haveAccess: false
  }

  componentDidMount() {
    this.isAuthenticated();
  }

  isAuthenticated = () => {
    let userToken = localStorage.getItem('user');
    axios.get('http://127.0.0.1:8090/api/v1/auth/get-user', {
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
      }).then(res => {
        this.props.writeUser({
          user: res.data,
          userToken: userToken
        });
        this.setState({ loaded: true, haveAccess: true });
      }).catch(err => {
        this.setState({ loaded: true, haveAccess: false });
        console.log(err);
      })
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { loaded, haveAccess } = this.state;
    if (!loaded) return <Loading />;
    return (
      <Route {...rest} render={props => {
          return haveAccess ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    writeUser: (user) => {
      dispatch(writeUser(user));
    }
  };
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(PrivateRoute);