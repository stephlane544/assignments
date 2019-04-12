import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      </div>
    );
  }
}

export default App;
