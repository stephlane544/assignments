import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './dataProvider.js'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

