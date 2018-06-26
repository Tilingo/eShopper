import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';

class App extends Component {

  state = {
    users: [],
    isLoggedIn: {
      loggedIn: false,
      userId: ''
    }
  }

  logIn = (userId) => {
    this.setState({
      loggedIn: true,
      userId: userId
    })
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
        <div>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route path="/users/:id" render={this.userProfileWrap} />
            <Route exact path="/login" render={this.logInWrapp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
