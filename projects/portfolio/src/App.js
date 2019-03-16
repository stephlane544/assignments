import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      </div>
    );
  }
}

export default App;
