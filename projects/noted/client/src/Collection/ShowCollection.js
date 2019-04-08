import React, { Component } from 'react';
import DisplayPages from './DisplayPages';
import FlipPage from 'react-flip-page';
import bookImg from '../Images/book.png';
import { withRouter } from 'react-router-dom';
import { withContext } from '../dataProvider.js';
import '../Styles/ShowCollection.css';
import PlusIcon from '../Images/plus.png';


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

    handleEdit = e => {
        e.preventDefault();
        const editedCollection = {
            _id: this.props.location.state.collection._id,
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
        if(this.props.location.state.collection){
            let { title, _id } = this.props.location.state.collection;
            this.setState({title, _id})
        }
    }
    render() {
        // console.log(this.props.location.state)
        let { title } = this.props.location.state.collection;
        const mappedPages = this.props.location.state.collection.pages.map((page) => <DisplayPages page={page} collection={this.props.location.state.collection} key={page._id}/>);
        return (
            <div className='collectionPage'>
                {!this.state.editCollection ?
                    <div className='collectionTitleAndEdit'>
                        <div></div>
                        <div className='collectionPageTitle'>{title}</div>
                        <div className='editDeleteTitleContainer'>
                            <img onClick={this.toggleEditCollection} className='editCollection' src="https://img.icons8.com/dotty/80/000000/edit.png" alt=''></img>
                            <img className='deleteCollection' onClick={this.deleteCollection} src='https://img.icons8.com/windows/32/000000/trash.png' alt=''></img>
                        </div>
                    </div>
                :
                    <form className='editCollectionForm' onSubmit={this.handleEdit}>
                        <input type="text"
                            placeholder='title'
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange} />
                        <button className='saveCollectionButton'><img className='saveCollection' src="https://img.icons8.com/dotty/80/000000/save.png" alt='' /></button>
                    </form> 
                } 
                <div className='bookAndNav'>
                    <button className='previousPage' onClick={() => this.flipPage.gotoPreviousPage()}>Previous Page</button>
                    <FlipPage className='flipPage' ref={(component) => { this.flipPage = component; }} orientation='horizontal' uncutPages='true' > 
                        {mappedPages}
                        <article className='page addNewPage' style={{backgroundImage: `url(${bookImg})`}}>
                            <div className='plusIconContainer'>
                                <img className='plusIcon' onClick={this.toggleCreatePage} src={PlusIcon} alt=''/>
                            </div>
                        </article>
                    </FlipPage>
                    <button className='nextPage' onClick={() => this.flipPage.gotoNextPage()}>Next Page</button>
                </div>
            </div>
        );
    }
}

export default withRouter(withContext(ShowCollection));