import React from 'react';
import NavBar from './NavBar';
import Title from './Title';
import pic from './home-bg.jpg'

const Header = () => {
    const container = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridAutoRows: 'max-content'
    }
    const img={
        margin: '-9px',
        backgroundImage:`url(${pic})`,
        gridColumn:'1/2',
        gridRow: '1/3',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    const overlay = {
        margin:'-9px',
        gridColumn:'1/2',
        gridRow: '1/3',
        backgroundColor: '#2323239e'
    }
    return(
        <div style={container}>
            <div style={img}></div>
            <div style={overlay}>
                <NavBar />
                <Title />
            </div>
        </div>
        
    )
}

export default Header;