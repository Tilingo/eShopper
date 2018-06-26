import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {

    state = {
        user: {
            stores: []
        }
    }

    getUser = () => {
        const userId = this.props.match.params.id

        axios.get(`/api/users/${userId}`).then(res => {
            this.setState({
                user: res.data.user
            })
        })
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

    deleteUser = () => {
        const userId = this.state.user._id

        axios.delete(`/api/users/${userId}`).then(res => {
            alert('User Deleted')
            this.props.history.push(`/`)
        })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        const user = this.state.user

        return (
            <div>
                <h1>Pofile</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="e_mail">E-mail Address</label>
                    <input onChange={this.handleChange} type="text" name="e_mail" value={user.e_mail} />

                    <label htmlFor="userName">User Name</label>
                    <input onChange={this.handleChange} type="text" name="userName" value={user.userName} />

                    <button type="submit">UPDATE</button>
                </form>

                <div>
                    {user.stores.map((store, i) => {
                        return (
                            <div key={i}>
                                <p>{store.description}</p>
                                <p>{store.name}</p>
                                {store.products.map((product, ind) => {
                                    return (
                                        <div key={ind}>
                                            <p>{product.name}</p>
                                            <p>{product.price}</p>
                                            <p>{product.description}</p>
                                            <p>{product.qty}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                <button onClick={this.deleteUser}>DELETE</button>

            </div>
        );
    }
}

export default UserProfile;