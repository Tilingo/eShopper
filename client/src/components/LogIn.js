import React, { Component } from 'react';
import FormWrapp from './styles/FormWrap';
import Button from './styles/Button';
import SignUpWrapp from './styles/SignUpWrapp';

class LogIn extends Component {

state={
    userName: '',
    password: ''
}

searchUser = (event) =>{
    event.preventDefault()
    const user = this.props.users.find((user) => user.userName === this.state.userName)
    
    if(user.userName === this.state.userName && user.password === this.state.password){
        this.props.history.push(`/users/${user._id}`)
        this.props.logIn(user._id)
    }
    else{
        alert('User Name or Password incorrect')
    }
}

handleChange = (event) =>{
    const inputName = event.target.name
    const userInput = event.target.value

    this.setState({
        [inputName]:userInput
    })
}

    render() {
        return (
            <SignUpWrapp>
                <h1>Log In</h1>
                <FormWrapp onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="userName" placeholder="User Name"/>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
                    <Button primary onClick={this.searchUser}>Log In</Button>
                </FormWrapp>
            </SignUpWrapp>
        );
    }
}

export default LogIn;