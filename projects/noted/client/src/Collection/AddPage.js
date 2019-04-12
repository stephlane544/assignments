import React, { Component } from 'react';
import { withContext } from '../dataProvider';
import '../Styles/AddPage.css';

class AddPage extends Component {
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

    addPage = e => {
        e.preventDefault();
        const newPage = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.addPage(newPage, this.props.location.state.collection).then(this.props.toggleCreatePage())
    }

    render() {
        console.log(this.props.location.state)
        return (
            <form className='createPageForm' onSubmit={this.addPage}>
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
                <button className='addPageButton save'>Add Page</button>
            </form> 
        );
    }
}

export default withContext(AddPage);