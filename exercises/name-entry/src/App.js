import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      text: "",
      array: []
    }
  }
  handleChange = e => {
    const text = e.target.value
    this.setState({ text })
  }

  addListItem = () => {
    let name = this.state.firstName + ' ' + this.state.lastName;
    this.setState((prevState) => {
      return {
        array: [...prevState.array, name]
      }
    })
    console.log(this.state.array)
  }

  render() {
    
    return (
     <div>
       <input onChange={this.handleChange}/>
       <h1>{this.state.text}</h1>
       <button onClick={this.addListItem}></button>
       <ol>{this.state.array.map((item, index) => <li key={item + index}>{item}</li>)}</ol>
     </div>
    );
  }
}

export default App;
