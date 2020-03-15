import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Overview from './components/Overview';
import './App.css';
import data from './STORE';

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        country: 'World',
        region: ''
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

  render() {
    console.log(data)
    return (
      <main className='App'>
        <Header />
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
      </main>
    );
  }
}

export default App;
