import React, { Component } from 'react';
import DisplayPages from './DisplayPages';
import FlipPage from 'react-flip-page';
import bookImg from '../Images/book.png';
import { withRouter } from 'react-router-dom';
import { withContext } from '../dataProvider.js';
import '../Styles/ShowCollection.css';
import whiteTrash from '../Images/whiteTrash.svg'
import whiteEdit from '../Images/whiteEdit.svg'

class ShowCollection extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            _id: '',
            editCollection: false
        }
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    toggleEditCollection = () => {
        this.setState(prevState => ({
            editCollection: !prevState.editCollection
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        const editedCollection = {
            _id: this.props.collection._id,
            title: this.state.title,
        }
        this.props.editCollection(editedCollection).then(this.toggleEditCollection())
    }

    toggleCreatePage = () => {
        console.log('fired')
        this.props.toggleCreatePage()
        let collection = this.props.location.state.collection;
        this.props.history.push({pathname:`/addPage`, state: {collection}})
    }

    deleteCollection = () => {
        if(window.confirm('Do you really wish to delete this collection?')) this.props.deleteCollection(this.state._id)
    }

    componentDidMount(){
        if(this.props.collection){
            let { title, _id } = this.props.collection;
            this.setState({title, _id})
        }
    }
    render() {
        let { title, _id } = this.props.location.state.collection;
        const mappedPages = this.props.location.state.collection.pages.map((page) => <DisplayPages page={page} key={page._id}/>);
        return (
            <div className='collectionPage'>
                <div className='collectionTitleAndEdit'>
                    <div className='collectionPageTitle'>{title}</div>
                        <img onClick={() => this.toggleEditCollection()} className='editCollection' src="https://img.icons8.com/dotty/80/000000/edit.png" alt=''></img>
                        <img className='deleteCollection' onClick={this.deleteCollection} src='https://img.icons8.com/windows/32/000000/trash.png' alt=''></img>
                </div>
                <div className='bookAndNav'>
                    <button className='previousPage' onClick={() => this.flipPage.gotoPreviousPage()}>Previous Page</button>
                    <FlipPage className='flipPage' ref={(component) => { this.flipPage = component; }} orientation='horizontal' uncutPages='true' flipOnTouch='true' > 
                        {mappedPages}
                        <article className='page' style={{backgroundImage: `url(${bookImg})`}}>
                                <img onClick={() => this.toggleCreatePage()} src="https://img.icons8.com/android/24/000000/plus.png" alt=''/>
                        </article>
                    </FlipPage>
                    <button className='nextPage' onClick={() => this.flipPage.gotoNextPage()}>Next Page</button>
                </div>
            </div>
        );
    }
}

export default withRouter(withContext(ShowCollection));