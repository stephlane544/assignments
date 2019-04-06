import React, { Component } from 'react';
import { withContext } from '../dataProvider';

class EditCollections extends Component {
    constructor(){
        super();
        this.state = {
            title: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('fired')
        
        if(this.props.editCollectionBoolean){
            const editedCollection = {
                _id: this.props._id,
                title: this.state.title,
            }
            console.log(editedCollection)
            this.props.editCollection(editedCollection).then(() => this.props.toggleEditCollection(this.props.collection))
        }
    }

    componentDidMount(){
        console.log(this.props)

        if(this.props.title){
            this.setState({title: this.props.title, _id: this.props._id})
        }

    }

    render() {
        console.log(this.props)
        if(!this.props.title){
            this.props.history.push(`/collections`)
        }
        return (
            <div>
                <form className='editCollectionForm' onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder='title'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange} />
                    <button className='saveCollectionButton'><img className='saveCollection' src="https://img.icons8.com/wired/64/000000/save-as.png" alt='' /></button>
                </form>
            </div>
        );
    }
}

export default withContext(EditCollections);