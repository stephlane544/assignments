import React from 'react';
import Questions from './Questions';
import {withProvider} from './QuestionsProvider';

class Game extends React.Component {

    componentDidMount(){
        this.props.getQuestions()
        
    }
    
    displayQuestion = () =>  {
        const randNum = Math.floor(Math.random() * 50) + 1
        const randQuestion = this.props.qAndA[randNum]
        return(
                <Questions key={randNum} randQuestion={randQuestion} />
        )
    }  
    render(){
        return(
            <div className="game">
                <div></div>
                <div className="Question">
                    {this.displayQuestion()}
                </div>
                <div className="score">
                    Your Score: {this.props.numberCorrect}
                </div>
            </div>
        )
    }
}


export default withProvider(Game)