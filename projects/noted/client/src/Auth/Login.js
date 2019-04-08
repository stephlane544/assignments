import React, { Component } from 'react';
import { withContext } from '../dataProvider';
import '../Styles/Form.css'

class Login extends Component {

    componentDidMount = () => {
        this.props.setLogin();
    }
    
    render() {
        return (
            <div className='formContainer'>
                <div className='formGridContainer'>
                    <form className='loginForm' onSubmit={this.props.handleSubmit}>
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

export default withContext(Login);