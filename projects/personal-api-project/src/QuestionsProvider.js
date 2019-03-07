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
        let apostrophe = question.question.replace(/&#039;/g, '\'').replace(/&quot;/g, '\'').replace(/&ldquo;/g, '\'').replace(/&rdquo;/g, '\'')
        let answers = [question.correct_answer.replace(/&#039;/g, '\'').replace(/&quot;/g, '\'').replace(/&ldquo;/g, '\'').replace(/&rdquo;/g, '\'')]
        question.incorrect_answers.map(answer => answers.push(answer.replace(/&#039;/g, '\'').replace(/&quot;/g, '\'').replace(/&ldquo;/g, '\'').replace(/&rdquo;/g, '\'')))
        let object = [
            apostrophe,
            answers
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