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

    getPrettyData = (question) => {
        let apostrophe = question.question.replace(/&#039;/g, '\'').replace(/&quot;/g, '\'').replace(/&ldquo;/g, '\'').replace(/&rdquo;/g, '\'')
        // let actualQuestion = apostrophe.replace(/&quot;/g, '\'')
        // let actualQuestion = apostrophe.replace(/&ldquo;/g, '\'')
        // let actualQuestion = apostrophe.replace(/&rdquo;/g, '\'')
        let answers = [question.correct_answer]
        question.incorrect_answers.map(answer => answers.push(answer))
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