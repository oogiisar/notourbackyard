import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
//import TokenService from '../services/token-service'
//import AuthApiService from '../services/auth-api-service'
import { Button, Input } from '../Utils/Utils';
import './css/Login.css';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          user_name: null
        }
  
    }
    
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleUserName = event => {
        const user_name = event.target
        this.setState({user_name: user_name.value})
    }

    handleSubmitstatic = event =>  {
        event.preventDefault()
        this.props.handleLogin('true', this.state.user_name)
        this.props.history.push(`/${this.state.user_name}/cleanup`)
    }

    

    /*handleSubmitJwtAuth = event => {
        event.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = event.target
        
        AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }*/

    render() {
        const { error } = this.state
        return (
        <form
            className='LoginForm'
            onSubmit={this.handleSubmitstatic.bind(this)}
        >
            <div role='alert'>
            {error && <p className='red'>{error}</p>}
            </div>
            <div className='user_name'>
            <label htmlFor='LoginForm__user_name'>
                User name
            </label>
            <Input
                required
                onChange={this.handleUserName}
                name='user_name'
                id='LoginForm__user_name'>
            </Input>
            </div>
            <div className='password'>
            <label htmlFor='LoginForm__password'>
                Password
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