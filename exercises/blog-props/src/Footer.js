import React from 'react';
import Twitter from './twitter-brands.svg';
import Facebook from './facebook-f-brands.svg';
import Github from './github-brands.svg';


const Footer = () =>{
    const pics = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
    const img = {
        height: '30px',
        width: '30px'
    }
    return(
        <div>
            <div style={pics}>
                <img style={img} src={Twitter} alt=''/>
                <img style={img} src={Facebook} alt=''/>
                <img style={img} src={Github} alt=''/>
            </div>
            <div style={{textAlign: 'center'}}>Copyright © Your Website 2019</div>
        </div>
    )
}

export default Footer;