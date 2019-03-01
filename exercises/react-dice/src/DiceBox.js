import React, { Component } from 'react';

class DiceBox extends Component {
    constructor(props){
        super(props)
        this.state ={
            number: props.num
        }
    }
    roll = () => {
        this.setState({
            number: Math.floor(Math.random() * 5) + 1
    })}
    render(){
    const dice = {
        border: '5px solid black',
        fontSize: '50px',
        padding: '20px',
        width: '100px'
    }
    return (
        <div>
            <div onClick={this.roll} style={dice}>{this.state.number}</div>
        </div>
    )
    }
}

export default DiceBox;