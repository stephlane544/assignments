import React, { Component } from 'react';
import Game from './Game';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Contact from './Contact'
import Browse from './Browse'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Game}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/browse' component={Browse}/>
        </Switch>
      </div>
    );
  }
}

export default App;
