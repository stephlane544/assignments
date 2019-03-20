import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <a href='/' className='links' id='name' to='/'>Stephanie Lane</a>
            <a href='/' className='links' id='about' to='/'>About</a>
            <a href='projects' className='links' id='projects' to='/projects'>Projects</a>
            <a href='contact' className='links' id='contact' to='/contact'>Contact</a>
        </div>
    );
};

export default Navbar;