import React, { Component } from 'react';
import { withContext } from './dataProvider';
import './Styles/Navbar.css';


class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            clickCounter: 1
        }
    }

    logout = () => {
        this.props.logout();
        console.log(this.props)
    }


    dropdown = () => {
        if (this.state.clickCounter % 2 === 1){
            document.getElementsByClassName("dropdownContent")[0].classList = "show";
        }else{ 
            document.getElementsByClassName("show")[0].classList = "dropdownContent";
        }
        let newCount = this.state.clickCounter + 1;
        this.setState(({clickCounter: newCount}))
        console.log(this.state.clickCounter)
    }
    render() {
        
        return (
            <div className='navbar'>
                <div className='homeVerticalAlign'>
                    <div className='homeDropBtnContainer'>
                        <div className="dropdown"> 
                            <button onClick={this.dropdown} className="dropbtn"> 
                                <div></div>
                                <div></div>
                                <div></div>
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdownContent" >
                                {this.props.token ?
                                    <>
                                        <a href='/userprofile' className='links dropDashboard' to='/dashboard'>Profile</a>
                                        <a href='/notes' className='links dropNotes' to='/notes'>Notes</a>
                                        <a href='/collections' className='links dropCollections' to='/collections'>Collections</a>
                                        <div onClick={this.logout} className='dropLogout'>Logout</div>
                                    </>
                                :
                                    <>
                                        <a href='/login' className='links dropLogin' to='/login'>Login</a>
                                        <a href='/signup' className='links dropSignup' to='/signup'>Sign Up</a>
                                    </>
                                }
                            </div>
                        </div>
                        <a href='/' className='links home' to='/'>Home</a>
                    </div>
                </div>
                {this.props.token ?
                    <>
                        <a href='/userprofile' className='links dashboard' to='/dashboard'>Profile</a>
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