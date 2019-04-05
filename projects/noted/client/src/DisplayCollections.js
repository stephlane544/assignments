import React, { Component } from 'react';
import { withContext } from './dataProvider.js';
import './Styles/DisplayCollections.css';
import FlipPage from 'react-flip-page';


class DisplayCollections extends Component {
    constructor(){
        super();
        this.state = {
            edit: false,
            title: '',
            description: '',
            _id: ''
        }
    }

    toggleEdit = () => {
        this.setState(prevState => ({edit: !prevState.edit}))
    }

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const editedCollection = {
            _id: this.props.collection._id,
            title: this.state.title,
            description: this.state.description,
        }
        
        console.log(editedCollection)
        this.props.editCollection(editedCollection).then(this.toggleEdit())
    }

    deleteCollection = () => {
        if(window.confirm('Do you really wish to delete this collection?')) this.props.deleteCollection(this.props.collection._id)
    }

    componentDidMount(){
        // let { title, description } = this.props.collection;
        // this.setState({title, description})
    }

    render() {
        // let { title, description, backgroundImg } = this.props.collection;
        let img = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3742e318412113.5634bc1e2876f.jpg'
        
        
        return (
            <div className='collectionContainer' >
                <button onClick={() => this.flipPage.gotoPreviousPage()}>Previous Page</button>
                <FlipPage ref={(component) => { this.flipPage = component; }} orientation='horizontal' uncutPages='true' flipOnTouch='true' responsive='true'>
                    <article style={{backgroundImage: `url(${img})`}}>
                        <h1>My awesome first article</h1>
                        <p>My awesome first content</p>
                    </article>
                    <article style={{backgroundImage: `url(${img})`}}>
                        <h1>My wonderful second article</h1>
                        <p>My wonderful second content</p>
                    </article>
                    <article style={{backgroundImage: `url(${img})`}}>
                        <h1>My excellent third article</h1>
                        <p>My excellent third content</p>
                    </article>
                </FlipPage>
                <button onClick={() => this.flipPage.gotoNextPage()}>Next Page</button>


                {/* {!this.state.edit ?
                    <>
                        <div className='collectionTitle'>{title}</div>
                        <div className='collectionDescription'>{description}</div>
                        <div className='collectionButtons'>
                            <img onClick={this.toggleEdit} className='editCollection' src="https://img.icons8.com/dotty/80/000000/edit.png" alt=''></img>
                            <img onClick={this.deleteCollection} src="https://img.icons8.com/windows/32/000000/trash.png" alt=''></img>
                        </div>
                    </>
                :
                    <form className='editCollectionForm' onSubmit={this.handleSubmit}>
                        <input type="text"
                            placeholder='title'
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange} />
                        <textarea type="text"
                            placeholder='description'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange} />
                        <button className='saveCollectionButton'><img className='saveCollection' src="https://img.icons8.com/wired/64/000000/save-as.png" alt='' /></button>
                    </form> 
                } */}
            </div>
        );
    }
};


export default withContext(DisplayCollections);