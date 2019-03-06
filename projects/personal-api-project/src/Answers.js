import React, { Component } from 'react';
import {withProvider} from './QuestionsProvider'
import Questions from './Questions'

class Answers extends Component {
    constructor(){
        super()
        this.state = {
            clickedValue: ''
        }
    }
    answerScrambler = () => {
        let copyOfArray = [...this.props.answers].sort(() => {
            return Math.floor(Math.random() * 2) - 1
        })
            return copyOfArray.map((answer, i) => {
                return <p onClick={() => {this.checkAnswer(answer)}} key={i}>{answer}</p> 
            }) 
    }

        
    checkAnswer = (answer) => { 
        console.log(answer)
        console.log(this.props.answers[0])
        console.log(answer === this.props.answers[0])
        if(answer === this.props.answers[0]){
            this.props.incrementScore()
            return  <Questions />
        }else{
            return  <Questions />
        }
    }

    render() {
        
        return (
            <>
              {this.answerScrambler()}  
            </>
        );
    }
}

export default withProvider(Answers);