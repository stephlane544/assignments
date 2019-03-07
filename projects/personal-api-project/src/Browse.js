import React from 'react';
import {withProvider} from './QuestionsProvider';
import DisplayAll from './DisplayAll'

const Browse = (props) => {
    const mappedQuestions = props.qAndA.map(array => <DisplayAll array={array}/>)
    return(
        <div>
            {mappedQuestions}
        </div>
    )
}



export default withProvider(Browse)