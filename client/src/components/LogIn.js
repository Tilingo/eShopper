import React, { Component } from 'react';
import FormWrapp from './styles/FormWrap';
import { Button } from './styles/Button';
import SignUpWrap from './styles/SignUpWrap';
import alertify from 'alertify.js'

class LogIn extends Component {

    state = {
        userName: '',
        password: ''
    }

    searchUser = (event) => {
        event.preventDefault()
        const user = this.props.users.find((user) => user.userName === this.state.userName)

        if (user === undefined) {
            alertify.error("Please enter a valid User Name");
        }
        else if (user.userName === this.state.userName && user.password === this.state.password) {
            this.props.history.push(`/users/${user._id}`)
            this.props.logIn(user._id)
            alertify.success(`Welcome ${user.userName}`);
        }
        else {
            alertify.error("User Name or Password incorrect");
        }
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value

        this.setState({
            [inputName]: userInput
        })
    }

    render() {
        return (
            <SignUpWrap>
                <h1>Log In</h1>
                <FormWrapp onSubmit={this.handleSubmit} autoComplete="off">
                    <input onChange={this.handleChange} type="text" name="userName" placeholder="User Name" />
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                    <Button primary onClick={this.searchUser}>Log In</Button>
                </FormWrapp>
            </SignUpWrap>
        );
    }
}

export default LogIn;