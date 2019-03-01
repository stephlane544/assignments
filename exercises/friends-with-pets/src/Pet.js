import React from 'react';

const Pet = (props) => {

    return(
        <div>
            <div>{props.petName}, a {props.breed}</div>
        </div>
    )
}

export default Pet;