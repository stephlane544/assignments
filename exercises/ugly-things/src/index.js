import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CuteThingsProvider from './CuteThingsProvider';

ReactDOM.render(
    <CuteThingsProvider >
        <App />
    </CuteThingsProvider>
    , document.getElementById('root'));

