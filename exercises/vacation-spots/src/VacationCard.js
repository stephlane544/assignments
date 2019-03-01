import React from 'react';

const VacationCard = (props) => {
    const card = {
        backgroundColor: props.backgroundColor, 
        padding: "20px"
    }
    return(
        <div style={card}>
            <h3>{props.place}</h3>
            <div className="price">Cost: {props.price}</div>
            <div className="season">Every {props.timeToGo}</div>

        </div> 
    )
}

export default VacationCard
