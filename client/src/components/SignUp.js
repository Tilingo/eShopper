import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import SignUpWrapp from './styles/SignUpWrap';
import { Button } from './styles/Button';
import FormWrap from './styles/FormWrap';
import alertify from 'alertify.js'

class SignUp extends Component {

    state = {
        e_mail: '',
        userName: '',
        password: ''
    }

    handleChange = (event) => {
        const userInput = event.target.value
        const inputName = event.target.name

        this.setState({
            [inputName]: userInput
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/users', this.state).then(res => {
            console.log(res)
            this.props.logIn(res.data.user._id)
            this.props.history.push(`/users/${res.data.user._id}`)
            alertify.success("Welcome to eShopper")
        })
    }

    render() {
        return (
            <SignUpWrapp>
                <h1>Welcome!</h1>
                <h3>Currently eShopper is under construction, so why don't you start creating your store too!</h3>
                <h4>Sign up now and start creating stores</h4>
                <FormWrap onSubmit={this.handleSubmit} autoComplete="off">
                    <input onChange={this.handleChange} type="email" name="e_mail" placeholder="E-mail address" autoComplete="email"/>
                    <input onChange={this.handleChange} type="text" name="userName" placeholder="User Name" autoComplete="username"/>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password" autoComplete="current-password"/>
                    <Button type="submit" primary>SIGN UP</Button>
                </FormWrap>
                <p>Already have an account? <Link to="/login" >Log in</Link></p>
            </SignUpWrapp>
        );
    }
}

export default SignUp;