import React, { Component } from 'react';
import DisplayNotes from './DisplayNotes.js';
import { withContext } from './dataProvider.js';
import './Styles/Notes.css';

class Notes extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            postItColor: ''
        }
    }

    handleChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)

        this.setState({[e.target.name]: e.target.value});
    }

    addNote = e => {
        e.preventDefault();
        let backgroundImg;
        console.log(this.state.postItColor)
        if(this.state.postItColor === 'blue'){
            backgroundImg = 'https://i.pinimg.com/400x300/13/fb/e7/13fbe75311f5b7eb89b75dc43efa3c31.jpg'
        }else if(this.state.postItColor === 'green'){
            backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XSNAqDitLJqPYY3S7AeMjN4L6iMhEaCeA0E5lbqnreuc_x17'
        }else if(this.state.postItColor ==='pink'){
            backgroundImg = 'https://i.pinimg.com/originals/e9/88/99/e98899b6eef240919eda4671f5b3e40e.png'
        }else if(this.state.postItColor === 'yellow'){
            backgroundImg = 'https://png.clipart.me/previews/a0a/free-vector-yellow-post-it-notes-with-push-pin-27013.png'
        }
        let newNote = {
            title: this.state.title,
            description: this.state.description,
            backgroundImg: backgroundImg
        }
        console.log(newNote)
        this.props.addNote(newNote);
    }


    render() {
        const mappedNotes = this.props.user.notes.map((note) => <DisplayNotes note={note} key={note._id}/>);
        let img = 'https://png.pngtree.com/element_origin_min_pic/17/08/18/eb98370c6aaeb4f2d0b6a9f0fd9c6b48.jpg'
        return (
            <div className='notesGrid'>
                {mappedNotes}
                <div className='addNoteContainer' style={{backgroundImage: `url(${img})`}}>
                    {this.props.createNote ?
                        <form className='createNoteForm' onSubmit={this.addNote}>
                            <input type="text"
                                placeholder='Title'
                                name='title'
                                value={this.title}
                                onChange={this.handleChange}
                                // required
                            />
                            <input type="text"
                                placeholder='Description'
                                name='description'
                                value={this.description}
                                onChange={this.handleChange}
                                required
                            />
                            <div className='postItColorSelector'>
                                <label>Post it color:</label>
                                <select onChange={this.handleChange} name='postItColor' required id="">
                                    <option value=""></option>
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                    <option value="pink">Pink</option>
                                    <option value="yellow">Yellow</option>
                                </select>
                            </div>
                            <button className='addNoteButton'>Add Note</button>
                        </form>
                    :
                        <svg onClick={this.props.toggleCreateNote} className='addNote' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="48" height="48"
                            viewBox="0 0 192 192"
                            style={{fill: "#000000"}}>
                            <g fill="none" fillRule="none" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,192v-192h192v192z" fill="none" fillRule="nonzero"></path><g fill="#ffffff" fillRule="evenodd"><g id="surface1"><path d="M88,16v72h-72v16h72v72h16v-72h72v-16h-72v-72z"></path></g></g></g></svg>
                    }
                    
                </div>
            </div>
        );
    }
}

export default withContext(Notes);