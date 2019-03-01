import React, { Component } from 'react';
import DiceBox from './DiceBox';


class App extends Component {

  render() {
      const numbers = [];
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;
    const num3 = Math.floor(Math.random() * 5) + 1;
    const num4 = Math.floor(Math.random() * 5) + 1;
    const num5 = Math.floor(Math.random() * 5) + 1;
    numbers.push(num1, num2, num3, num4, num5);
    const mappedDice = numbers.map(num => {
      return (
        <div>
          <DiceBox 
            num={num}
          />
        </div>
      )
    })
    return (
      <div>
        {mappedDice}
      </div>
    );
  }
}

export default App;
