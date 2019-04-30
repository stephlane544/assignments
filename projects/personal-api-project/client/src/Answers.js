import React, { Component } from 'react';
import {withProvider} from './QuestionsProvider'

class Answers extends Component {
    constructor(){
        super()
        this.state = {
            nextButton: false,
            answer: '',
            clicked: false,
            clickEnabled: true,
            scrambledAnswers: []
        }
    }
    answerScrambler = () => {
        if(this.state.clickEnabled){
            let copyOfArray = [...this.props.answers].sort(() => {
                return Math.floor(Math.random() * 2) - 1
            })
            return copyOfArray.map((answer, i) => {
            
                return <p onClick={this.state.clickEnabled ? () => {this.checkAnswer(answer); this.setScrambledAnswers(copyOfArray);}: null} key={i}>{answer}</p>
            }) 
        }else{
            return this.state.scrambledAnswers.map((answer, i) => {
                let nameClass = ''
                if (answer === this.props.answers[0] && this.state.clicked){
                    nameClass = 'correctAnswer'
                }else if(this.state.clicked){
                    nameClass = 'wrongAnswer'
                }
                return <p className={nameClass} key={i}>{answer}</p>
            })
        }
    }

    setScrambledAnswers = (copyOfArray) => {
        this.setState({
            scrambledAnswers: copyOfArray
        })
    }
        
    checkAnswer = (answer) => { 
        this.setState({
            nextButton: true,
            clicked: true,
            clickEnabled: false,
            answer: answer
        })
    }

    nextQuestion = () => {
        this.setState({
            clickEnabled: true
        })
        if(this.state.answer === this.props.answers[0]){
            this.props.incrementScore()
        }else{
            this.props.wrongAnswer()
        }
    }

    render() {
        
        return (
            <>
                <div className="answers">
                {this.answerScrambler()}  
                </div>
                <div className="buttonWrapper">
                    {this.state.nextButton ? 
                    <button className="next" onClick={() => {this.nextQuestion()}}>Next Question ></button>
                    : 
                    <div></div>
                    }
                </div>
            </>
        );
    }
}

export default withProvider(Answers);