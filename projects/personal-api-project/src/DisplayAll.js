import React from 'react';

const DisplayAll = (props) => {
    // console.log(props)
    // console.log(props.question[1])
    const mappedAnswers = props.question[1].map((answer, i) => <><div key={i+i}>{answer}  </div><br/></>)
    return (
        <div className="displayAll">
            <br/>
            <div className="displayTitles">
                <div>Category:</div>
                <div>Question: </div> 
                <div>Possible Answers: </div>
                <div>Correct Answer: </div>
            </div>

            <div className="categories">
                <div>{props.question[2]}</div>
                <div>{props.question[0]}</div>
                <div>{mappedAnswers}</div>
                <div>{props.question[1][0]}</div>
            </div>
            <br/>
            <div className='questionBorders'></div>

        </div>
    );
};

export default DisplayAll;