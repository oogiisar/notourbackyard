import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import { withRouter } from "react-router-dom";
import { CountryDropdown } from 'react-country-region-selector';
import AuthApiService from '../services/auth-api-service';
import './css/Signup.css';


class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  constructor (props) {
    super(props)
    this.state = { 
      error: null,
      country: '--',
      success: null
    }
  }

  selectCountry (val) {
    this.setState({ country: val})
  }

  

  handleSubmit = event => {
    event.preventDefault()
    const { display_name, email, password, home_country } = event.target

    this.setState({ error: null })
        AuthApiService.postUser({
            display_name: display_name.value,
            email: email.value,
            password: password.value,
            home_country: home_country.value,
    })
    .then(user => {
        display_name.value = ''
        email.value = ''
        password.value = ''
        home_country.value = ''
        this.props.onRegistrationSuccess()
  })
  .catch(res => {
    this.setState({ error: res.error })
  })

  this.setState({success: 'Your user has been added'})

}

  render() {
    const country = this.state.country;
    const error  = this.state.error
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
          {this.state.success == null ? <></> : <p className='success'>{this.state.success}</p>}
        </div>
        <div className='display_name'>
          <label htmlFor='RegistrationForm__display_name'>
            Name <Required />
          </label>
          <Input
            name='display_name'
            type='text'
            required
            id='RegistrationForm__display_name'>
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
            Home  Country <Required />
          </label>
          <div>
            <CountryDropdown
              classes='country_region_box'
              value={country}
              name="home_country"
              onChange={(val) => this.selectCountry(val)}
              required
            />
          </div>
        </div>
        <Button type='submit'>
            Register
        </Button>
      </form>
    )
  }
}

export default withRouter(RegistrationForm);