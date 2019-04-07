import React, { Component } from 'react';
import { withContext } from '../dataProvider.js';
import '../Styles/DisplayCollections.css';
import { withRouter } from 'react-router-dom';



class DisplayCollections extends Component {
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

    deleteCollection = () => {
        if(window.confirm('Do you really wish to delete this collection?')) this.props.deleteCollection(this.state._id)
    }
    showCollection =() =>{
        if(this.props.collection){
            let collection = this.props.collection
            this.props.history.push({pathname:`/collections/${this.state._id}`, state: {collection}})
        }
    }

    componentDidMount(){
        if(this.props.collection){
            let { title, _id } = this.props.collection;
            this.setState({title, _id})
        }
    }

    render() {
        const bookImg = 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902__340.png'
        return (
            <div className='collectionContainer' >
                    <div className='collectionView' onClick={this.showCollection} style={{backgroundImage: `url(${bookImg})`}}>
                        <div className='collectionTitle'>{this.state.title}</div>
                    </div>
            </div>
        );
    }
};


export default withRouter(withContext(DisplayCollections));