import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom'

import Login from './Login/login'
import {DashBoard} from './Dashboard/dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard/:user' component={DashBoard} />
        </Switch>
      </div>
    );
  }
}

export default App;
