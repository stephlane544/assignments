import React, { Component } from 'react';
import {withProvider} from './BountiesProvider';
import saveButton from './Icons/Asset 5.png'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            _id: '',
            firstName: '',
            lastName: '',
            bounty: 0,
            living: true,
            type: '',
            imageUrl: ''
        }
    }

    handleSubmit = e => {
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bounty: this.state.bounty,
            living: this.state.living,
            type: this.state.type,
            imageUrl: this.state.imageUrl
        }
        if (this.props.formType === 'add'){
            e.preventDefault()
            this.props.postBounty(newBounty)
        }else {
            this.props.editBounty(this.state._id, this.state)
            this.props.toggleEdit()
        }
    }

    handleChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    componentDidMount(){
        if(this.props.formType === 'edit'){
            let {firstName, lastName, living, bounty, type, imageUrl, _id} = this.props.bounty
            this.setState({firstName, lastName, living, bounty, type, imageUrl, _id})
        }
    }

    render() {
        let {firstName, lastName, living, bounty, type, imageUrl } = this.state
        return (
            <>
                {this.props.formType === 'edit' ? 
                    <form onSubmit={this.handleSubmit} className='form'>
                    <input 
                            type="text" 
                            value={firstName} 
                            placeholder='First Name'
                            name='firstName' 
                            className='firstNameInput' 
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={lastName} 
                            placeholder='Last Name'
                            name='lastName'
                            className='lastNameInput'  
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={living} 
                            placeholder='Living' 
                            name='living' 
                            className='livingInput' 
                            onChange={this.handleChange} />
                        <input 
                            type="number" 
                            value={bounty} 
                            placeholder='Bounty' 
                            name='bounty' 
                            className='bountyInput' 
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={type} 
                            placeholder='Type' 
                            name='type' 
                            className='typeInput'
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={imageUrl} 
                            placeholder='Image' 
                            name='imageUrl' 
                            className='imageUrlInput' 
                            onChange={this.handleChange} />
                        <img onClick={this.handleSubmit} src={saveButton} className='saveButton' alt=""/> 
                    </form>
                :
                    <form onSubmit={this.handleSubmit} className='form'>
                        <input 
                            type="text" 
                            value={firstName} 
                            placeholder='First Name'
                            name='firstName' 
                            className='firstNameInput' 
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={lastName} 
                            placeholder='Last Name'
                            name='lastName'
                            className='lastNameInput'  
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={living} 
                            placeholder='Living' 
                            name='living' 
                            className='livingInput' 
                            onChange={this.handleChange} />
                        <input 
                            type="number" 
                            value={bounty} 
                            placeholder='Bounty' 
                            name='bounty' 
                            className='bountyInput' 
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={type} 
                            placeholder='Type' 
                            name='type' 
                            className='typeInput' 
                            onChange={this.handleChange} />
                        <input 
                            type="text" 
                            value={imageUrl} 
                            placeholder='Image' 
                            name='imageUrl' 
                            className='imageUrlInput' 
                            onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit} className='submitButton'>Submit</button>
                    </form>
                }
            </>
        );
    }
}

export default withProvider(Form);