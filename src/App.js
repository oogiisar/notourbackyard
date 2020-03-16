import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Overview from './components/Overview';
import Login from './components/Login';
import Signup from './components/Signup';
import Cleanup from './components/Cleanup';
import './App.css';
import data from './STORE';

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        country: 'World',
        region: '',
        user: null,
        loggedIn: null
      }

  }

  getCountry = (country) => {
    this.setState({
      country: country
    });
  }

  getRegion = (region) => {
    this.setState({
      region: region
    })
  }

  handleLogin = (loggedIn, user ) => {
    this.setState({
      loggedIn: loggedIn,
      user: user
    })
  }

  render() {
    console.log(data)
    return (
      <main className='App'>
        <Header 
          loggedIn={this.state.loggedIn}
          user={this.state.user}
        />

        <Route 
          exact path='/'
          render={(props) =>
            <Overview 
              getCountry={this.getCountry}
              getRegion={this.getRegion}
              country={this.state.country}
              region={this.state.region}
              data={data}
            />
          }
        />

        <Route 
          path='/login'
          render={(props) =>
            <Login 
              handleLogin={this.handleLogin}
            />
          }
        />

        <Route
          path='/signup'
          render={(props) =>
            <Signup />
          }
        />

        <Route
          path='/:user/cleanup'
          render={(props) =>
            <Cleanup 
              user={props.match.params.user}
            />
          }
        />

      </main>
    );
  }
}

export default App;
