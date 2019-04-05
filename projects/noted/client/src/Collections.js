import React, { Component } from 'react';
import DisplayCollections from './DisplayCollections.js';
import { withContext } from './dataProvider.js';
import './Styles/Collections.css';

class Collections extends Component {
    constructor(){
        super()
        this.state = {
            collectionTitle: '',
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
            collectionTitle: this.state.collectionTitle,
        }
        this.props.addCollection(newCollection);
    }


    render() {
        const mappedCollections = this.props.user.collections.map((collection) => <DisplayCollections collection={collection} key={collection._id}/>);
        let img = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3742e318412113.5634bc1e2876f.jpg'
        return (
            <div className='collectionsGrid'>
                {mappedCollections}
                <DisplayCollections />
                <div className='addCollectionContainer' style={{backgroundImage: `url(${img})`}}>
                    {this.props.createCollection ?
                        <form className='createCollectionForm' onSubmit={this.addCollection}>
                            <input type="text"
                                placeholder='Collection Title'
                                name='collectionTitle'
                                value={this.collectionTitle}
                                onChange={this.handleChange}
                                required
                            />
                            {/* <input type="text"
                                placeholder='Page Title'
                                name='pageTitle'
                                value={this.pageTitle}
                                onChange={this.handleChange}
                            />
                            <textarea type="text"
                                placeholder='First Page Content'
                                name='firstPageContent'
                                value={this.firstPageContent}
                                onChange={this.handleChange}
                                required
                            /> */}
                            <button className='addCollectionButton'>Add Collection</button>
                        </form>
                    :
                    null
                    }
                </div>
            </div>
        );
    }
}

export default withContext(Collections);