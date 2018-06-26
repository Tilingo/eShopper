import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

class App extends Component {

  state={
    users: []
  }

  getUsers = () => {
    axios.get('/api/users').then(res=>{
      console.log(res)
    })
  }

  logInWrapp = (props) =>(
    <LogIn {...props}/>
  )
  
  componentDidMount(){
    this.getUsers()
  }

  render() {
    return (
     <Router>
       <div>
         <Switch>
           <Route exact path="/signup" component={SignUp}/>
           <Route exact path="/login" render={this.logInWrapp}/>
         </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
