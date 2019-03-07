import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '4fr 1fr 1fr', justifyContent:'space-between'}}>
            <Link to='/'>Trivia Game</Link>
            <Link style={{paddingRight:'45%'}} to='/about'>About</Link>
            <Link style={{paddingRight:'45%'}} to='/browse'>Browse</Link>
        </div>
    );
};

export default Navbar;