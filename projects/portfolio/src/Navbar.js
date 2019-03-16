import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='links' id='name' to='/'>Stephanie Lane</Link>
            <Link className='links' id='about' to='/'>About</Link>
            <Link className='links' id='projects' to='/projects'>Projects</Link>
            <Link className='links' id='contact' to='/contact'>Contact</Link>
        </div>
    );
};

export default Navbar;