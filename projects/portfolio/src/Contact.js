import React from 'react';
import './Styles/Contact.css'


class Contact extends React.Component{
    twitter = () => {
        window.open("https://twitter.com/StephLane544");
    }

    github = () => {
        window.open("https://github.com/stephlane544/");
    }
    
    linkedIn = () => {
        window.open("https://www.linkedin.com/in/stephanie--lane/");
    }

    render () {
        return (
            <div id='contact'>
                <div>520-286-0841</div>
                <div>stephlane544@gmail.com</div>
                <img onClick={this.twitter} id="twitter" src="https://img.icons8.com/ios/50/000000/twitter-filled.png" alt=""/>
                <img onClick={this.github} id="github" src="https://img.icons8.com/ios/50/000000/github-filled.png" alt=""/>
                <img onClick={this.linkedIn} id="linkedIn" src="https://img.icons8.com/ios/50/000000/linkedin-filled.png" alt=""/>
            </div>
        );
    }
};

export default Contact;