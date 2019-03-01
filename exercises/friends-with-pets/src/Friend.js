import React from 'react';
import Pet from './Pet';

const Friend = (props) => {
    const friend = {
        backgroundColor: "#aae4aa",
        padding: "20px",
        borderRadius: "15px"
    }
    const petsStyle = {
    }
    const pets = props.pets.map((pet, i) => {
        return(
            <Pet 
            petName={pet.name}
            breed={pet.breed}
            key={i + pet.name}
            />
        )
    })
    
    return(
        <div style={friend}>
            <div >{props.name} is {props.age} yrs old.</div>
            <br></br>
            <div  style={petsStyle}>{props.name} has the following pets: {pets}</div>
        </div>
    )

}






export default Friend