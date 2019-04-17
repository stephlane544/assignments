import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';


class App extends Component {
  constructor() {
    super() ;

    this.state = {
        sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    return (
      <>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler}/>
        {this.state.sideDrawerOpen ?
          <Backdrop click={this.backdropClickHandler} />
        :
          null
        }
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App;
