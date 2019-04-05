import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login.js';
import Dashboard from './Dashboard.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Signup from './Auth/Signup.js';
import Notes from './Notes.js';
import Collections from './Collections.js';


class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/notes' component={Notes} />
          <Route path='/collections' component={Collections} />
        </Switch>

      </div>
    );
  }
}

export default App;
