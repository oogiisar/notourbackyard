import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import { withRouter } from "react-router-dom";
//import AuthApiService from '../../services/auth-api-service';
import './css/Signup.css';


class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = event => {
    event.preventDefault()
    this.props.history.push(`/login`)
    /*const { user_name, email, password, home_country } = event.target

    this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            email: email.value,
            password: password.value,
            home_country: home_country.value,
    })
    .then(user => {
        user_name.value = ''
        email.value = ''
        password.value = ''
        home_country.value = ''
        this.props.onRegistrationSuccess()
  })
  .catch(res => {
    this.setState({ error: res.error })
  })*/
}

  render() {
    //const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit.bind(this)}
      >
        {/*<div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>*/}
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>
            E-mail <Required />
          </label>
          <Input
            name='email'
            type='text'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='home_country'>
          <label htmlFor='RegistrationForm__home_country'>
            Nickname
          </label>
          <Input
            name='home_country'
            type='text'
            required
            id='RegistrationForm__home_country'>
          </Input>
        </div>
        <Button type='submit'>
            Register
        </Button>
      </form>
    )
  }
}

export default withRouter(RegistrationForm);