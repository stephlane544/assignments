import React  from 'react';
import './Styles/Navbar.css';

const Navbar = (props) => {

    return (
        <>
            <div className='navbar'>
                <div id='name'>Stephanie Lane</div>
                <a href='#projects' className='links navProjects'  to='/projects'>Projects</a>
                <a href='#contact' className='links navContact' to='/contact'>Contact</a>
            </div>

            <div className='navbar2'>
                <div id='name'>Stephanie Lane</div>
                <button className="toggleHamburger" onClick={props.drawerClickHandler}>
                    <div className="toggleHamburgerLine"></div>
                    <div className="toggleHamburgerLine"></div>
                    <div className="toggleHamburgerLine"></div>
                </button>
            </div>
        </>
    );
};

export default Navbar;