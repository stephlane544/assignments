import React from 'react';

const NavBar = () => {
    const nav = {
        gridColumn:'1/2',
        gridRow: '1/2',
        display: 'flex',
        flexDirection: 'row',
        height: '50px',
        padding:'10px 20px',
        color: '#fff',
        fontSize: '1.25rem',
    }
    const start = {
        marginRight: '1rem',
    }

    const part = {
        textAlign: 'right',
        paddingLeft: '10%',
        width: '100px',
        fontSize: '12px',
        fontWeight: '800'

    }
    const rightNav = {
        marginLeft: '440px',
        display: 'flex',
        flexDirection: 'row'
    }


    return(
        <div style={nav}>
            <div style={start}>Start Bootstrap</div>
            <div style={rightNav}>
                <div style={part}>Home</div>
                <div style={part}>About</div>
                <div style={part}>Sample Post</div>
                <div style={part}>Contact</div>
            </div>
        </div>
    )
}

export default NavBar;