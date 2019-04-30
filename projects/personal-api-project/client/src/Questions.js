import React, { Component } from 'react';
import {withProvider} from './QuestionsProvider';
import Answers from './Answers'


class Questions extends Component {
    answers = () => {
        if(this.props.randQuestion){
            return(
            <Answers answers={this.props.randQuestion[1]} />
            )
        }else{return(null)}
    }
    render() {
        return (
            <div className="questions">
                <div>{this.props.randQuestion ? this.props.randQuestion[0] : null}</div>
                <>
                    {this.answers()}
                </>
            </div>
        );
    }
}

export default withProvider(Questions);
