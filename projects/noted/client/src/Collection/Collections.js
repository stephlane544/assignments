import React, { Component } from 'react';
import DisplayCollections from './DisplayCollections.js';
import { withContext } from '../dataProvider.js';
import '../Styles/Collections.css';
import whitePlus from '../Images/whitePlus.svg'

class Collections extends Component {
    constructor(){
        super()
        this.state = {
            pageTitle: '',
            firstPageContent: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    addCollection = e => {
        e.preventDefault();
        let newCollection = {
            title: this.state.collectionTitle,
        }
        this.props.addCollection(newCollection);
    }


    render() {
        const mappedCollections = this.props.user.collections.map((collection) => <DisplayCollections collection={collection} key={collection._id}/>);
        const bookImg = 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902__340.png'
        return (
            <div className='collectionsGrid'>
                {mappedCollections}
                <div className='addCollectionContainer' style={{backgroundImage: `url(${bookImg})`}}>
                    {this.props.createCollection ?
                        <form className='createCollectionForm' onSubmit={this.addCollection}>
                            <input type="text"
                                placeholder='Collection Title'
                                name='collectionTitle'
                                value={this.collectionTitle}
                                onChange={this.handleChange}
                                required
                            />
                            <button className='addCollectionButton'>Add Collection</button>
                        </form>
                    :
                        <img onClick={this.props.toggleCreateCollection} src={whitePlus} alt=''></img>
                    }
                </div>
            </div>
        );
    }
}

export default withContext(Collections);