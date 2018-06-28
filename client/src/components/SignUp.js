import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

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
            this.props.history.push(`/users/${res.data.user._id}`)
        })
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="email" name="e_mail" placeholder="e-mail address" />
                    <input onChange={this.handleChange} type="text" name="userName" placeholder="User Name" />
                    <input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
                    <button type="submit">CREATE ACCOUNT</button>
                </form>
                <p>Already have an account? <Link to="/login" >Log in here</Link></p>
            </div>
        );
    }
}

export default SignUp;