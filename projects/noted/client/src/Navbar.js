import React, { Component } from 'react';
import { withContext } from './dataProvider';
import './Styles/Navbar.css';


class Navbar extends Component {

    logout = () => {
        this.props.logout();
        console.log(this.props)
    }
    render() {
        
        return (
            <div className='navbar'>
                <a href='/' className='links home' to='/'>Home</a>
                {this.props.token ?
                    <>
                        <a href='/dashboard' className='links dashboard' to='/dashboard'>Dashboard</a>
                        <a href='/notes' className='links notes' to='/notes'>Notes</a>
                        <a href='/collections' className='links collections' to='/collections'>Collections</a>
                        <div onClick={this.logout} className='logout'>Logout</div>
                    </>
                :
                    <>
                        <a href='/login' className='links login' to='/login'>Login</a>
                        <a href='/signup' className='links signup' to='/signup'>Sign Up</a>
                    </>
                }
            </div>
        );
    }
};

export default withContext(Navbar);