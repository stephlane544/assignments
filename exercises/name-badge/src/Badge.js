import React from 'react';


const Badge = (props) => {
    const {name, birthPlace, email, phone, favFood, about, backgroundColor} = props
    console.log(backgroundColor)
    return(
        <div style={{border: '3px solid #606060', borderRadius: '10px', marginLeft: '175px', marginRight: '175px', marginTop: '50px'}}>
            <header style={{backgroundColor, color: 'white', padding: '10px', paddingLeft: '40px', fontSize: '30px'}}>Badge:</header>
            <ul style={{listStyleType: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: 'maxContent'}}>
                <li style={{gridColumn: '1/2', gridRow: '1/2', height: '20px', fontSize: '20px', margin: '20px'}}>Name: {name}</li>
                <li style={{gridColumn: '1/2', gridRow: '2/3', height: '20px', fontSize: '20px', margin: '20px'}}>Place of Birth: {birthPlace}</li>
                <li style={{gridColumn: '1/2', gridRow: '3/4', height: '20px', fontSize: '20px', margin: '20px'}}>Email: {email}</li>
                <li style={{gridColumn: '2/3', gridRow: '1/2', height: '20px', fontSize: '20px', margin: '20px'}}>Phone: {phone}</li>
                <li style={{gridColumn: '2/3', gridRow: '2/3', height: '20px', fontSize: '20px', margin: '20px'}}>Favorite Food: {favFood}</li>
                <li style={{border: '3px solid', height: '100px', width: '1000px', gridColumn: '1/3', gridRow: '4/5', fontSize: '20px', margin: '20px'}}>{about}</li>
            </ul>
        </div>
    )
}

export default Badge;