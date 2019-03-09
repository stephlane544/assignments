import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="links" id="linkGame" to='/'>Trivia Game</Link>
            <Link className="links" id="linkAbout" to='/about'>About</Link>
            <Link className="links" id="linkBrowse" to='/browse'>Browse</Link>
        </div>
    );
};

export default Navbar;