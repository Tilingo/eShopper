import React, { Component } from 'react';

class LogIn extends Component {

state={
    userName: '',
    password: ''
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
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default LogIn;