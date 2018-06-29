import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppWrapp from './components/styles/AppWrapp';

class App extends Component {

  state = {
    users: []
  }

  logIn = (userId) => {
    localStorage.clear();
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userId', userId);
  }

  getUsers = () => {
    axios.get('/api/users').then(res => {
      this.setState({ users: res.data.users })
    })
  }

  logInWrapp = (props) => (
    <LogIn
      logIn={this.logIn}
      users={this.state.users}
      {...props} />
  )

  userProfileWrap = (props) => (
    <UserProfile
      users={this.state.users}
      {...props} />
  )

  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <Router>
        <AppWrapp>
          <NavBar />
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/users/:id" render={this.userProfileWrap} />
            <Route exact path="/login" render={this.logInWrapp} />
          </Switch>
          <Footer/>
        </AppWrapp>
      </Router>
    );
  }
}

export default App;
