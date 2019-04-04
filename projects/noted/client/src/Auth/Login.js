import React, { Component } from 'react';
import { withContext } from '../dataProvider';

class Login extends Component {

    componentDidMount = () => {
        this.props.setLogin();
    }
    
    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.props.handleSubmit}>
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
        );
    }
}

export default withContext(Login);