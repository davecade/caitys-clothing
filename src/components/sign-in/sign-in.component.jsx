import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component(props) {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value})
    }

    

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn;