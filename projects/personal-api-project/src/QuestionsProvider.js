import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();

class QuestionsProvider extends Component {
    constructor(){
        super()
        this.state = {
            qAndA: [],
            numberCorrect: 0
        }
    }
    getQuestions = () => {
        axios.get('https://opentdb.com/api.php?amount=50').then(response => {
            const object = response.data.results.map(item => this.getPrettyData(item))
            this.setState({
                qAndA: object
            })
        })
    }

    incrementScore = () => { 
        this.setState(prevState => ({
            numberCorrect: (prevState.numberCorrect + 1)
        }))
    }

    wrongAnswer = () => { 
        this.setState(prevState => ({
            numberCorrect: prevState.numberCorrect
        }))
    }

    getPrettyData = (question) => {
        const parser = new DOMParser();
        let parsedQuestion = parser.parseFromString(`<!doctype html><body>${question.question}`, 'text/html')
        let parsedCorrect = parser.parseFromString(`<!doctype html><body>${question.correct_answer}`, 'text/html')
        
        let prettyQuestion = parsedQuestion.body.textContent
        let answers = [parsedCorrect.body.textContent]

        question.incorrect_answers.map(answer => {
            let parsedAnswer = parser.parseFromString(`<!doctype html><body>${answer}`, 'text/html')
            return answers.push(parsedAnswer.body.textContent)
        })

        let object = [
            prettyQuestion,
            answers,
            question.category,
            question.type,
            question.difficulty
        ]
        return object
    }
    render() {
        return (
            <Provider value={{
                getPrettyData: this.getPrettyData,
                getQuestions: this.getQuestions,
                incrementScore: this.incrementScore,
                wrongAnswer: this.wrongAnswer,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default QuestionsProvider;
export function withProvider (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}