import React from 'react';
import DisplayNotes from './DisplayNotes.js';
import { withContext } from './dataProvider.js';
import './Styles/Dashboard.css';

const Dashboard = (props) => {
    const mappedNotes = props.user.notes.map((note) => <DisplayNotes note={note} key={note.id}/>)
    return (
        <div>
            {mappedNotes}
        </div>
    );
}

export default withContext(Dashboard);