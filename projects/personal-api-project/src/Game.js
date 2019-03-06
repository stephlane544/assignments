import React from 'react';
import Questions from './Questions';
import {withProvider} from './QuestionsProvider';

class Game extends React.Component {
    constructor(props){
        super (props)
        
    }
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
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                    {this.displayQuestion()}
                </div>
                <div>
                    Your Score: {this.props.numberCorrect}
                </div>
            </div>
        )
    }
}


export default withProvider(Game)