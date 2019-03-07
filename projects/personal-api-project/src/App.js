import React, { Component } from 'react';
import Game from './Game';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import About from './About'
import Browse from './Browse'


class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Switch>
          <Route exact path='/' component={Game}/>
          <Route path='/about' component={About}/>
          <Route path='/browse' component={Browse}/>
        </Switch>
      </div>
    );
  }
}

export default App;
