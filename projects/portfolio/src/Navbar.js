import React  from 'react';
import './Styles/Navbar.css';

const Navbar = () => {

    return (
        <>
            <div className='navbar'>
                <a href='/' className='links' id='name' to='/'>Stephanie Lane</a>
                <a href='#about'  className='links navAbout' to='/'>About</a>
                <a href='#projects' className='links navProjects'  to='/projects'>Projects</a>
                <a href='#contact' className='links navContact' to='/contact'>Contact</a>
            </div>
            <div className='navbar2'>
                <a href='/' className='links' id='name' to='/'>Stephanie Lane</a>
                <div className='navColumn'>
                    <a href='#about'  className='links navAbout' to='/'>About</a>
                    <a href='#projects' className='links navProjects'  to='/projects'>Projects</a>
                    <a href='#contact' className='links navContact' to='/contact'>Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;