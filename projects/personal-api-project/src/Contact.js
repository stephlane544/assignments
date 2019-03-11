import React from 'react';
import Headshot from './Headshot.jpg'

const Contact = () => {
    return(
        <div className='contact'>
            <div className='leftContact'>
                <img className='image' src={Headshot} alt=""/>
                <div className='imgCaption' style={{textAlign: 'center'}}>Pictured: Stephanie Lane - Web Developer</div>
            </div>
            <div className='rightContact'>
                <div>Phone Number:</div>
                <br/>
                <div>520-286-0841</div>
                <br/>
                <br/>
                <div>Email: </div>
                <br/>
                <div>stephlane544@gmail.com</div>
                <br/>
                <br/>
                <div className='contactLinks'>
                    <img id="twitter" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt=""/>
                    <img id="github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
                    <img id="linkedIn" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt=""/>
                </div>
            </div>
        </div>
    )
}



export default Contact