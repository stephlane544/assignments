import React, { Component } from 'react';
import { withContext } from './dataProvider.js';
import './Styles/UserProfile.css';


class UserProfile extends Component {
    constructor(){
        super();
        this.state = {
            edit: false,
            firstName: '',
            email: '',
            username:''
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
        const editedUser = {
            firstName: this.state.firstName,
            email: this.state.email,
            username: this.state.username,
        }
    
        this.props.editUser(editedUser).then(this.toggleEdit())
    }

    componentDidMount(){
        let { firstName, email, username } = this.props.user;
        this.setState({ firstName, email, username })
    }

    componentDidUpdate(){
        if(this.props.location.state){
            if(this.props.location.state.user.firstName !== this.props.user.firstName){
                let { firstName} = this.props.user;
                this.setState({ firstName})
            }else if(this.props.location.state.user.email !== this.props.user.email){
                let { email} = this.props.user;
                this.setState({ email })
            } else if(this.props.location.state.user.username !== this.props.user.username){
                let { username } = this.props.user;
                this.setState({ username })
            }
        }
    }
    render() {
        return (
            <>
                {!this.state.edit ? 
                    <>
                        <div className='profileGrid'>
                            <div className='labels'>
                                <div className='firstName'>First Name:</div>
                                <div className='email'>Email: </div>
                                <div className='username'>Username: </div>
                            </div>
                            <div className='userInfo'>
                                <div className='firstName'>{this.state.firstName}</div>
                                <div className='email'>{this.state.email}</div>
                                <div className='username'>{this.state.username}</div>
                            </div>
                        </div>
                        <div className='profileEdit'>
                            <img onClick={this.toggleEdit} className='editPage' src="https://img.icons8.com/dotty/80/000000/edit.png" alt=''></img>
                        </div>
                    </>
                :
                    <form className='editUserForm' onSubmit={this.handleSubmit}>
                        <input 
                            className='editUserInput'
                            type="text"
                            placeholder='First Name'
                            name='firstName'
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                        <input 
                            className='editUserInput'
                            type="text"
                            placeholder='Email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange} />
                        <input 
                            className='editUserInput'
                            type="text"
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange} />
                        <button className='saveUserButton'><img className='saveNote' src="https://img.icons8.com/wired/64/000000/save-as.png" alt='' /></button>
                    </form> 
                }
            </>
        );
    }
}


export default withContext(UserProfile);