import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp';

class App extends Component {

  render() {
    return (
     <Router>
       <div>
         <Switch>
           <Route exact path="/signup" component={SignUp}/>
         </Switch>
       </div>
     </Router>
    );
  }
}

export default App;
