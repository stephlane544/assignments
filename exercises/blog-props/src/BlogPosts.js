import React from 'react';
import Post from './Post'

const BlogPosts = () => {
    const posts = [
        {
            title:'Man must explore, and this is exploration at its greatest',
            description: 'Problems look mighty small from 150 miles up',
            author: 'Start Bootstrap',
            date: 'September 24, 2019'
        },
        {
            title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.',
            author: 'Start Boostrap',
            date: 'September 18, 2019'
        },
        {
            title:'Science has not yet mastered prophecy',
            description: 'We predict too much for the next year and yet far too little for the next ten',
            author: 'Start Bootstrap',
            date: 'August 24, 2019'
        },
        {
            title: 'Failure is not an option',
            description: 'Many say exploration is part of our destiny, but it\'s actually our duty to future generations',
            author: 'Start Bootstrap',
            date: 'July 8, 2019'
        }
    ]
    const mappedPosts = posts.map((post, i) => {
        return(
            <Post 
                title={post.title}
                description={post.description}
                author={post.author}
                date={post.date}
            />
        )
    })

    const postsStyle = {
        marginLeft: '300px',
        marginRight: '300px',
        marginTop: '50px'
    }
    const button = {
        textAlign: 'right',
        border: 'none',
        backgroundColor: '#0085a1',
        fontSize: '14px',
        lineHeight: '21px',
        color: '#ffffff',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '1%',
        paddingBottom: '1%'
    }
    const buttonRow = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

    return(
        <div style={postsStyle}>
            {mappedPosts}
            <div style={buttonRow}>
                <button style={button}>Older Posts →</button>
            </div>
        </div>
    )
}



export default BlogPosts