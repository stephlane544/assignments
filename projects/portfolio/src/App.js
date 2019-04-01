import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />

      
      
        {/* <Route exact path='/' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/> */}
      </div>
    );
  }
}

export default App;
