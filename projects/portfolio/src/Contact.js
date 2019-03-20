import React from 'react';
import styles from './Styles/Contact.css'


class Contact extends React.Component{
    twitter = () => {
        window.open("https://twitter.com/StephLane544");
    }

    github = () => {
        window.open("https://github.com/stephlane544/assignments");
    }
    
    linkedIn = () => {
        window.open("https://www.linkedin.com/in/stephanie--lane/");
    }

    render () {
        return (
            <div className='contact'>
                <div>520-286-0841</div>
                <div>stephlane544@gmail.com</div>
                <img onClick={this.twitter} id="twitter" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt=""/>
                <img onClick={this.github} id="github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt=""/>
                <img onClick={this.linkedIn} id="linkedIn" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt=""/>
            </div>
        );
    }
};

export default Contact;