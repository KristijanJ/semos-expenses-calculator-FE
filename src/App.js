import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
