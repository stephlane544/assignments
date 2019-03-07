import React from 'react';

const DisplayAll = (props) => {
    console.log(props.array)
    const mappedAnswers = props.array[1].map(answer => <span>{answer}  </span>)
    return (
        <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr', paddingBottom:'20px'}}>
            <div>
                <div>Question: </div> 
                <div>{props.array[0]}</div>
            </div>
            <div>
                <div>Possible Answers: </div>
                <div>{mappedAnswers}</div>
            </div>
            <div>
                <div>Correct Answer: </div>
                <div>{props.array[1][0]}</div>
            </div>
        </div>
    );
};

export default DisplayAll;