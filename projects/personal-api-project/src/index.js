import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuestionsProvider from './QuestionsProvider'

ReactDOM.render(
    <QuestionsProvider>
        <App />
    </QuestionsProvider>
, document.getElementById('root'));

