import React, { Component } from 'react';
import './Styles/Home.css'

class Home extends Component {
    render() {
        return (
            <div className='homeBackground'>
                <div className='notedCentering'>
                    <div className='homeTitle'>Noted</div>
                </div>
                
                <div className='homePostItContainer'>
                    <img className='homePostIt' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XSNAqDitLJqPYY3S7AeMjN4L6iMhEaCeA0E5lbqnreuc_x17" alt=""/>
                </div>

                <div className='checkMarkContainer'>
                    <img className='homeCheckMark' src="https://img.icons8.com/ios/500/000000/checkmark-filled.png" alt=''/>
                </div>
            </div>
        );
    }
}

export default Home;