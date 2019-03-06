import React, { Component } from 'react';
import List from './List';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#6CCCAE', margin: '-10px', marginTop:'-30px', paddingBottom: '30px'}}>
        <List />
        <br/>
      </div>
    );
  }
}

export default App;
