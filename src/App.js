import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Overview from './components/Overview';
import Login from './components/Login';
import Signup from './components/Signup';
import Cleanup from './components/Cleanup';
import NewCleanup from './components/NewCleanup';
import TopCountries from './components/TopCountries';
import './App.css';
import data from './STORE';

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        country: 'World',
        region: '',
        newcountry: '',
        newregion: '',
        user: null,
        home_country: null,
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

  getNewCountry = (country) => {
    this.setState({
      newcountry: country
    });
  }

  getNewRegion = (region) => {
    this.setState({
      newregion: region
    })
  }

  handleLogin = (loggedIn, user, home_country ) => {
    this.setState({
      loggedIn: loggedIn,
      user: user,
      home_country: home_country
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

        <section id="content">

          <Route 
            exact path='/'
            render={(props) =>
              <>
                <Overview 
                  getCountry={this.getCountry}
                  getRegion={this.getRegion}
                  country={this.state.country}
                  region={this.state.region}
                  data={data}
                />
                <TopCountries />
              </>
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
                user={this.state.user}
                home_country={this.state.home_country}
                data={data}
              />
            }
          />

          <Route
            path='/:user/newcleanup'
            render={(props) =>
              <NewCleanup 
                user={this.state.user}
                data={data}
                getNewCountry={this.getNewCountry}
                getNewRegion={this.getNewRegion}
                newcountry={this.state.newcountry}
                newregion={this.state.newregion}
              />
            }
          />

        </section>

      </main>
    );
  }
}

export default App;
