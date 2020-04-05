import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import { Button, Input, Required } from '../Utils/Utils';
import './css/Login.css';

class LoginForm extends Component {
    
    // Use the handleLogin function to update state in app to force a refresh of the header
    onLoginSuccess = (authToken) => {
        let user = TokenService.parseJwt(authToken)
        this.props.handleLogin('true')
        this.props.history.push(`/${user.user_is}/cleanup`)
    }

    state = { error: null }
    

    handleSubmitJwtAuth = event => {
        event.preventDefault()
        this.setState({ error: null })
        const { email, password } = event.target
        
        AuthApiService.postLogin({
        email: email.value,
        password: password.value,
        })
        .then(res => {
            email.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.onLoginSuccess(res.authToken)
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state
        return (
        <form
            className='LoginForm'
            onSubmit={this.handleSubmitJwtAuth}
        >
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
                <div className='success'>
                    <p>Demo Login Credentials:</p>
                    <p>Username: user@demo.com</p>
                    <p>Password: !QAZ2wsx</p>
                </div>
            </div>
            <div className='email'>
            <label htmlFor='LoginForm__email'>
                Email <Required />
            </label>
            <Input
                required
                onChange={this.handleUserName}
                name='email'
                id='LoginForm__email'>
            </Input>
            </div>
            <div className='password'>
            <label htmlFor='LoginForm__password'>
                Password <Required /> 
            </label>
            <Input
                required
                name='password'
                type='password'
                id='LoginForm__password'>
            </Input>
            </div>
            
            <Button type='submit'>
                Login
            </Button>
        </form>
        )
    }
}

export default withRouter(LoginForm);