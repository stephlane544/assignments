import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 100
    }
  }
  subtract = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      }
    })
  }
  render(){
    return(
      <div>
        Hello
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.subtract}>-</button>
      </div>
    )
  }
}

export default App;
