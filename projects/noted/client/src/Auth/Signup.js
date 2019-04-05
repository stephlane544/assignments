import React, { Component } from 'react';
import { withContext } from '../dataProvider';
import '../Styles/Form.css'

class Signup extends Component {

    
    render() {
        return (
            <div className='signupFormContainer'>
                <div className='signupFormGridContainer'>
                    <form className='signupForm' onSubmit={this.props.handleSubmit}>
                        <input type="text"
                            placeholder='First Name:'
                            name='firstName'
                            value={this.props.firstName}
                            onChange={this.props.handleChange}
                            required/>
                        <input type="text"
                            placeholder='Email:'
                            name='email'
                            value={this.props.email}
                            onChange={this.props.handleChange}
                            required/>
                        <input type="text"
                            placeholder='Username:'
                            name='username'
                            value={this.props.username}
                            onChange={this.props.handleChange}
                            required/>
                        <input type="password"
                            placeholder='Password:'
                            name='password'
                            value={this.props.password}
                            onChange={this.props.handleChange}
                            required/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withContext(Signup);