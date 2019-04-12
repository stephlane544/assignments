import React, { Component } from 'react';
import '../Styles/AddPage.css';
import { withContext } from '../dataProvider.js';

class EditPage extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description:''
        }
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    editPage = e => {
        e.preventDefault();
        let {collection} = this.props.location.state
        const editedPage = {
            title: this.state.title,
            description: this.state.description
        }
        // console.log(this.state.description)
        this.props.editPage(editedPage, collection, this.props.location.state.page._id).then(this.props.history.push({pathname: `/collections/${collection._id}`, state: {collection}}))
    }

    componentDidMount(){
        let { title, description } = this.props.location.state.page
        this.setState({title, description})
    }

    render() {
        // console.log(this.props.location.state)
        return (
            <form className='editPageForm' onSubmit={this.editPage}>
                <input type="text"
                    placeholder='Page Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <textarea type="text"
                    placeholder='Page Content'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                />
                <button className='savePageButton save'>Save Page</button>
            </form> 
        );
    }
}

export default withContext(EditPage);