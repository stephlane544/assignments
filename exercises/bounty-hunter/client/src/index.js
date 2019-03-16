import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BountiesProvider from './BountiesProvider'


ReactDOM.render(
    <BountiesProvider>
        <App />
    </BountiesProvider>
, document.getElementById('root'));

