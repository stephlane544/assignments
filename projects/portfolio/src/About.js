import React from 'react';
import headshot from './headshot.jpg'
import './Styles/About.css'

const About = () => {
    return (
        <div id='about'>
            <div className='aboutGrid'>
                <img className='headshot' src={headshot} alt=""/>
                <div className='aboutDescription'>I am a web developer, currently in Salt Lake City, Utah, but originally from Tucson, Arizona. I love the outdoors and animals. I have a degree in Mathematics, and attended a 12 week immersive full-stack web development course focused on the MERN stack. </div>
            </div>
        </div>
    );
};

export default About;