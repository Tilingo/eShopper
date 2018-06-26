import React, { Component } from 'react';

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
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="userName" placeholder="User Name"/>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
                    <button onClick={this.searchUser}>Log In</button>
                </form>
            </div>
        );
    }
}

export default LogIn;