import React  from 'react';
import Todos from './project thumbnails/To-dos.png';
import ZenGarden from './project thumbnails/CSS Zen Garden.png';
import TriviaGame from './project thumbnails/Trivia Game.png';
import SwapMeet from './project thumbnails/SwapMeet.png';
import Noted from './project thumbnails/Noted.png';
import skewTopBackground from './skewTopBackground.png';
import skewBottomBackground from './skewBottomBackground.png';
import './Styles/Projects.css';


const Projects = () => {
    return (
        <>
            <div id='projects'>
                <img className='skewTopBackground1' src={skewTopBackground} alt=''/>
                <div className='projectGrid'>
                    <div className='swapMeet'> 
                        <div className='projectInfo swapMeetInfo'>
                            <div className='title'>Swap Meet</div>
                            <div className='description'>
                                A website app for bartering services. Users create a profile with a service they can offer to others, which will then show up in the searched services. Users can search for others services, and can use the app to barter their services or can call/email the user directly for services.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                        </div>
                        <a href="https://swap-meet-for-freelancers.herokuapp.com/" className='swapMeetImg' target='_blank'rel="noopener noreferrer" >
                            <img src={SwapMeet} alt=""/>
                        </a>
                    </div>
                    <div className='noted'> 
                        <a href="https://noted-note-taking.herokuapp.com/" className='notedImg' target='_blank'rel="noopener noreferrer" >
                            <img src={Noted} alt=""/>
                        </a>
                        <div className='projectInfo notedInfo'>
                            <div className='title'>Noted</div>
                            <div className='description'>
                                Noted is an app for small notes, but it also has a collections section in which users can make a book with whatever content they would like.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                        </div>
                    </div>
                    <div className='triviaGame'>
                        <div className='projectInfo triviaGameInfo'>
                            <div className='title'>Trivia Game</div>
                            <div className='description'>
                                Created a trivia game using opentdb API. It randomly gives a user a question, shows the correct and incorrect answers once an answer is chosen, and keeps track of the users score. In addition, the user can search through the questions for specific words, category, difficulty level, or type.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, HTML, CSS
                            </div>
                        </div>
                        <a href="https://stephanie_lane_TriviaGame.surge.sh" className='triviaGameImg' target='_blank'rel="noopener noreferrer" >
                            <img src={TriviaGame} alt=""/>
                        </a> 
                    </div>
                </div>
                <img className='skewBottomBackground' src={skewBottomBackground} alt=''/>
                <div className='projectGrid2'>
                    <div className='todos'>
                        <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" className='todosImg' target='_blank'rel="noopener noreferrer" >
                            <img src={Todos} alt=""/>
                        </a>
                        <div className='projectInfo todosInfo'>
                            <div className='title'>To-dos</div>
                            <div className='description'>
                                Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt2'>Built using: </div>
                                HTML, CSS, and Javascript
                            </div>
                        </div>
                    </div>
                    <div className='zenGarden'>
                        <div className='projectInfo zenGardenInfo'>
                            <div className='title'>CSS Zen Garden</div>
                            <div className='description'>
                                Created a website mimicking the appearance of csszengarden.com
                            </div>
                            <div className='description'>
                                Mobile-first responsive design
                            </div>
                            <div className='builtWith'>
                                <span className='boldBuilt2'>Built using: </span>
                                HTML and CSS (grid in particular)
                            </div>
                        </div>
                        <a href="https://stephanie_lane_cssZenGarden.surge.sh" className='zenGardenImg' target='_blank'rel="noopener noreferrer" >
                            <img src={ZenGarden} alt=""/>
                        </a> 
                    </div>
                </div>
                <img className='skewTopBackground2' src={skewTopBackground} alt=''/>
            </div>


            <div id='projects2'>
                <img className='skewTopBackground1' src={skewTopBackground} alt=''/>
                <div className='projectGrid'>
                    <div className='swapMeet'> 
                        <div className='projectInfo swapMeetInfo'>
                            <div className='title'>Swap Meet</div>
                            <div className='description'>
                                A website app for bartering services. Users create a profile with a service they can offer to others, which will then show up in the searched services. Users can search for others services, and can use the app to barter their services or can call/email the user directly for services.
                            </div>
                            <div className='collaborators'>In collaboration with Madison Porter</div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                        </div>
                        <a href="https://swap-meet-for-freelancers.herokuapp.com/" className='swapMeetImg' target='_blank'rel="noopener noreferrer" >
                            <img src={SwapMeet} alt=""/>
                        </a>
                    </div>
                    <div className='noted'> 
                        <div className='projectInfo notedInfo'>
                            <div className='title'>Noted</div>
                            <div className='description'>
                                Noted is an app for small notes, but it also has a collections section in which users can make a book with whatever content they would like.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, Express, MongoDB, Mongoose, HTML, CSS
                            </div>
                        </div>
                        <a href="https://noted-note-taking.herokuapp.com/" className='notedImg' target='_blank'rel="noopener noreferrer" >
                            <img src={Noted} alt=""/>
                        </a>
                    </div>
                    <div className='triviaGame'>
                        <div className='projectInfo triviaGameInfo'>
                            <div className='title'>Trivia Game</div>
                            <div className='description'>
                                Created a trivia game using opentdb API. It randomly gives a user a question, shows the correct and incorrect answers once an answer is chosen, and keeps track of the users score. In addition, the user can search through the questions for specific words, category, difficulty level, or type.
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt'>Built using: </div>
                                React, HTML, CSS
                            </div>
                        </div>
                        <a href="https://stephanie_lane_TriviaGame.surge.sh" className='triviaGameImg' target='_blank'rel="noopener noreferrer" >
                            <img src={TriviaGame} alt=""/>
                        </a> 
                    </div>
                </div>
                <img className='skewBottomBackground' src={skewBottomBackground} alt=''/>
                <div className='projectGrid2'>
                    <div className='todos'>
                        <div className='projectInfo todosInfo'>
                            <div className='title'>To-dos</div>
                            <div className='description'>
                                Developed a website linked to an API to get a person's to-do list. Also allowed user to post new to-do items, delete items, or mark them as complete using Axios to put these into the API
                            </div>
                            <div className='builtWith'>
                                <div className='boldBuilt2'>Built using: </div>
                                HTML, CSS, and Javascript
                            </div>
                        </div>
                        <a href="https://stephanie_lane_AxiosTo-dos.surge.sh" className='todosImg' target='_blank'rel="noopener noreferrer" >
                            <img src={Todos} alt=""/>
                        </a>
                    </div>
                    <div className='zenGarden'>
                        <div className='projectInfo zenGardenInfo'>
                            <div className='title'>CSS Zen Garden</div>
                            <div className='description'>
                                Created a website mimicking the appearance of csszengarden.com
                            </div>
                            <div className='description'>
                                Mobile-first responsive design
                            </div>
                            <div className='builtWith'>
                                <span className='boldBuilt2'>Built using: </span>
                                HTML and CSS (grid in particular)
                            </div>
                        </div>
                        <a href="https://stephanie_lane_cssZenGarden.surge.sh" className='zenGardenImg' target='_blank'rel="noopener noreferrer" >
                            <img src={ZenGarden} alt=""/>
                        </a> 
                    </div>
                </div>
                <img className='skewTopBackground2' src={skewTopBackground} alt=''/>
            </div>
        </>
    );
};

export default Projects;