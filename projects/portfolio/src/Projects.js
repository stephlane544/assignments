import React from 'react';
import Todos from './project thumbnails/To-dos.png';
import ZenGarden from './project thumbnails/CSS Zen Garden.png';
import TriviaGame from './project thumbnails/Trivia Game.png';
import styles from './Styles/Projects.css'


const Projects = () => {
    return (
        <div className='projectGrid'>
            <div className='triviaGame'>
                <a href="https://stephanie_lane_TriviaGame.surge.sh" target='_blank'>
                    <img src={TriviaGame} alt=""/>
                </a> 
                <div className='projectInfo'>
                    <div className='title'>Trivia Game</div>
                    <div className='description'>
                        Created a trivia game using opentdb API. It randomly gives a user a question, shows the correct and incorrect answers once an answer is chosen, and keeps track of the users score. In addition, the user can search through the questions for specific words, category, difficulty level, or type.
                    </div>
                    <div className='builtWith'>
                        <div className='boldBuilt'>Built using: </div>
                        React, HTML, CSS
                    </div>
                </div>
            </div>
            <div className='todos'>
                <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" target='_blank'>
                    <img src={Todos} alt=""/>
                </a>
                <div className='projectInfo'>
                    <div className='title'>To-dos</div>
                    <div className='description'>
                        Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                    </div>
                    <div className='builtWith'>
                        <div className='boldBuilt'>Built using: </div>
                        HTML, CSS, and Javascript
                    </div>
                </div>
            </div>
            <div className='zenGarden'>
                <a href="https://stephanie_lane_cssZenGarden.surge.sh" target='_blank'>
                    <img src={ZenGarden} alt=""/>
                </a> 
                <div className='projectInfo'>
                    <div className='title'>CSS Zen Garden</div>
                    <div className='description'>
                        Created a website mimicking the appearance of csszengarden.com
                    </div>
                    <div className='description'>
                        Mobile-first responsive design
                    </div>
                    <div className='builtWith'>
                        <span className='boldBuilt'>Built using: </span>
                        HTML and CSS (grid in particular)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;