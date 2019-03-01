import React from 'react';

const Post = (props) => {
    const post = {
        borderBottom:"black 1px solid"
    }
    return(
        <div style={post}>
            <div style={{fontSize:'36px', lineight: '43.2px'}}>{props.title}</div>
            <div style={{fontSize:'1.75rem', lineHeight: '33.6px'}}>{props.description}</div>
            <div style={{fontSize:'18px', fontStyle: 'italic', lineHeight: '1.5'}}>Posted by <span style={{fontWeight:'bold'}}>{props.author}</span> on {props.date}</div>

        </div>
    )
}

export default Post