import React, { Component } from 'react';
import bookImg from '../Images/book.png';


class DisplayPages extends Component {
    constructor(){
        super();
        this.state = {
            _id: '',
            title: '',
            description: ''
        }
    }

    componentDidMount(){
        let { title, description, _id} = this.props.page
        this.setState({ _id, title, description})
    }

    render() {
        console.log(this.props.page)
        return (
            <article className='page' style={{backgroundImage:`url(${bookImg})`}}>
                <div className='pageContent'>
                    <div>{this.state.title}</div>
                    <div>{this.state.description}</div>
                    <div className='editAndDeletePage'>
                        <img onClick={() => this.toggleEditCollection()} className='editCollection' src="https://img.icons8.com/dotty/80/000000/edit.png" alt=''></img>
                        <img className='deleteCollection' onClick={this.deleteCollection} src='https://img.icons8.com/windows/32/000000/trash.png' alt=''></img>
                    </div>
                </div>
            </article>
        );
    }
}

export default DisplayPages;


