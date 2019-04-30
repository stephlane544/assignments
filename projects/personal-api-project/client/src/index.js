import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuestionsProvider from './QuestionsProvider'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <QuestionsProvider>
            <App />
        </QuestionsProvider>
    </BrowserRouter>
, document.getElementById('root'));

