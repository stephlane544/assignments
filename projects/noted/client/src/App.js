import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login.js';
import UserProfile from './UserProfile.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Signup from './Auth/Signup.js';
import Notes from './Notes.js';
import Collections from './Collection/Collections.js';
import AddPage from './Collection/AddPage';
import ShowCollection from './Collection/ShowCollection';
import EditPage from './Collection/EditPage.js';


class App extends Component {
  render() {
    return (
      < >
        <Navbar />
        <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/userprofile' component={UserProfile} />
          <Route path='/notes' component={Notes} />
          <Route exact path='/collections' component={Collections} />
          <Route path='/collections/:collectionId' component={ShowCollection} />
          <Route path='/addPage' component={AddPage} />
          <Route path='/editPage/:pageId' component={EditPage} />
        </Switch>
      </>
    );
  }
}

export default App;
