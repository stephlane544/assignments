import React, { Component } from 'react';
import List from './List';


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#00c4ff82', margin: '-10px'}}>
        <header style={{textAlign: 'center', fontSize: '50px'}}>Cutsy Stuff!!</header>
        <List />
      </div>
    );
  }
}

export default App;
