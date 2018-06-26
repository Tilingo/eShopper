import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {

    state = {
        user: {
            e_mail: '',
            password: ''
        }
    }

    getUser = () => {
        const userId = this.props.match.params.id

        axios.get(`/api/users/${userId}`).then(res =>
            this.setState({
                user: res.data.user
            })
        )
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value

        const newState = { ...this.state }
        newState.user[inputName] = userInput

        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const userId = this.state.user._id

        axios.patch(`/api/users/${userId}`, this.state.user).then((res) => {
            this.props.history.push(`/users/${res.data.user._id}`)
        })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        return (
            <div>
                <h1>Pofile</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="e_mail">E-mail Address</label>
                    <input onChange={this.handleChange} type="text" name="e_mail" value={this.state.user.e_mail} />

                    <label htmlFor="userName">User Name</label>
                    <input onChange={this.handleChange} type="text" name="userName" value={this.state.user.userName} />

                    <button type="submit">UPDATE</button>
                </form>

            </div>
        );
    }
}

export default UserProfile;