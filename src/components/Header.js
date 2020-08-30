import React, { Component } from 'react';
import '../assets/css/dashboard.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="btn-group">
          <button className="btn btn-solid text-bold">Products</button>
          <button className="btn btn-ghost text-bold">Expenses</button>
        </div>
        <div className="user">
          <div className="user-photo">
            <img src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" width="40" height="40"/>
          </div>
          <div className="user-name">Kristijan Jovanovski</div>
        </div>
      </header>
    )
  }
}
