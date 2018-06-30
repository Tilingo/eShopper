import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppWrap from './components/styles/AppWrap';

class App extends Component {

  state = {
    users: [],
    burgerMenu: false
  }

  showMenu = () => {
    this.setState({ burgerMenu: !this.state.burgerMenu })
  }

  closeMenu = () => {
    this.setState({ burgerMenu: false })
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
      closeMenu={this.closeMenu}
      showMenu={this.showMenu}
      logIn={this.logIn}
      users={this.state.users}
      {...props} />
  )

  signUpWrapp = (props) => (
    <SignUp
     closeMenu={this.closeMenu}
      showMenu={this.showMenu}
      logIn={this.logIn}
      {...props} />
  )

  userProfileWrap = (props) => (
    <UserProfile
      closeMenu={this.closeMenu}
      showMenu={this.showMenu}
      users={this.state.users}
      {...props} />
  )

  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <Router>
        <AppWrap>
          <NavBar showMenu={this.showMenu} burgerMenu={this.state.burgerMenu} closeMenu={this.closeMenu}/>
          <Switch>
            <Route exact path="/" render={this.signUpWrapp} />
            <Route path="/users/:id" render={this.userProfileWrap} />
            <Route exact path="/login" render={this.logInWrapp} />
          </Switch>
          <Footer />
        </AppWrap>
      </Router>
    );
  }
}

export default App;
