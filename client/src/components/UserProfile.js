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

    deleteStore = (id) => {
        // const userId = this.state.user._id
        // const storeId = this.state.user.store.id

        console.log("This is the store key", id)
    }

    deleteProduct = (id) => {
        // const userId = this.state.user._id
        // const storeId = this.state.user.store.id

        console.log("This is the product key", id)
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        const user = this.state.user

        return (
            <div>
                <h1>Profile</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="e_mail">E-mail Address</label>
                    <input onChange={this.handleChange} type="text" name="e_mail" value={user.e_mail} />

                    <label htmlFor="userName">User Name</label>
                    <input onChange={this.handleChange} type="text" name="userName" value={user.userName} />

                    <button type="submit">UPDATE</button>
                </form>

                <button onClick={this.deleteUser}>DELETE USER</button>

                <div>
                    {user.stores.map((store, i) => {
                        return (
                            <div key={i}>
                                <h2>{store.name}</h2>
                                <h3>{store.description}</h3>
                                <button onClick={() => this.deleteStore(store._id)}>DELETE STORE</button>

                                {store.products.map((product, ind) => {
                                    return (
                                        <ul key={ind}>
                                            <li>Name: {product.name}</li>
                                            <li>Price: ${product.price}</li>
                                            <li>Description: {product.description}</li>
                                            <li>QTY: {product.qty}</li>
                                            <button onClick={() => this.deleteProduct(product._id)}>DELETE PRODUCT</button>
                                        </ul>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }
}

export default UserProfile;