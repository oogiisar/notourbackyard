import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Overview from './components/Overview';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import Cleanup from './components/Cleanup';
import NewCleanup from './components/NewCleanup';
import './App.css';

class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        loggedIn: null
      }

  }

  // Used to force rerender when someone logs in or out.
  handleLogin = (loggedIn) => {
    this.setState({
      loggedIn: loggedIn
    })
  }

  render() {
    return (
      <main className='App'>
        <Header 
          handleLogin={this.handleLogin}
        />

        <section id="content">

          <Route 
            exact path='/'
            component={(props) =>
                <Overview />
            }
          />

          <PublicOnlyRoute 
            path='/login'
            component={(props) =>
              <Login 
                handleLogin={this.handleLogin}
              />
            }
          />

          <PublicOnlyRoute
            path='/signup'
            component={(props) =>
              <Signup />
            }
          />

          <PrivateRoute
            path='/:user/cleanup'
            component={(props) =>
              <Cleanup />
            }
          />

          <PrivateRoute
            path='/:user/newcleanup'
            component={(props) =>
              <NewCleanup />
            }
          />

        </section>

      </main>
    );
  }
}

export default App;
