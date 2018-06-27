import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {

    state = {
        user: {
            stores: []
        },
        storeForm: false,
        storeToEdit: '',
        newStore: {
            name: '',
            description: ''
        },
        productForm: false,
        productToEdit: '',
        newProduct: {
            name: '',
            price: 0,
            description: '',
            qty: 0
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

    ///////USERS FUNCTIONS//////////////
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
    //////////END OF USERS FUNCTIONS//////

    //////////STORE FUNCTIONS//////////
    showStoreForm = () => {
        this.state.storeForm ? this.setState({ storeForm: false }) : this.setState({ storeForm: true })
    }

    handleStoreChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        const newState = { ...this.state }

        newState.newStore[inputName] = userInput
        this.setState(newState)
    }

    handleStoreSubmit = (event) => {
        event.preventDefault()
        const userId = this.state.user._id

        axios.post(`/api/users/${userId}/stores`, this.state.newStore).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
        })
    }

    showStoreEditForm = (id) => {
        this.setState({ storeToEdit: id })
    }

    closeStoreEditForm = () => {
        this.setState({ storeToEdit: '' })
    }

    handleEditStoreSubmit = (event, id) => {
        event.preventDefault()
        const userId = this.state.user._id

        axios.patch(`/api/users/${userId}/stores/${id}`, this.state.newStore).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
        })
    }

    deleteStore = (id) => {
        const userId = this.state.user._id

        axios.delete(`/api/users/${userId}/stores/${id}`).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
        })
    }
    ///////END OF STORE FUNCTIONS/////////////

    ////////PRODUCT FUNCTIONS
    showProductForm = () => {
        this.state.productForm ? this.setState({ productForm: false }) : this.setState({ productForm: true })
    }

    handleProductChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        const newState = { ...this.state }

        newState.newProduct[inputName] = userInput
        this.setState(newState)
    }

    handleProductSubmit = (event, storeId) => {
        event.preventDefault()
        const userId = this.state.user._id

        axios.post(`/api/users/${userId}/stores/${storeId}/products`, this.state.newProduct).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
        })
    }

    showProductEditForm = (id) => {
        this.setState({ productToEdit: id })
    }

    closeProductEditForm = () => {
        this.setState({ productToEdit: '' })
    }

    handleEditProductSubmit = (event, storeId, productId) => {
        event.preventDefault()
        const userId = this.state.user._id

        axios.patch(`/api/users/${userId}/stores/${storeId}/products/${productId}`, this.state.newProduct).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
        })
    }

    deleteProduct = (productId, storeId) => {
        const userId = this.state.user._id
        axios.delete(`/api/users/${userId}/stores/${storeId}/products/${productId}`).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
        })
    }
    ///////END OF PRODUCT FUNCTIONS

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

                <button onClick={this.showStoreForm}>NEW STORE</button>
                {this.state.storeForm
                    ? <form onSubmit={this.handleStoreSubmit}>
                        <input onChange={this.handleStoreChange} type="text" name="name" placeholder="My Example's Store" />
                        <input onChange={this.handleStoreChange} type="text" name="description" placeholder="My store is amazing and has great products" />
                        <button type="submit">CREATE STORE</button>
                    </form>
                    : null}

                <div>
                    {user.stores.map((store, i) => {

                        return (
                            <div key={i}>

                                {this.state.storeToEdit == store._id
                                    ? <form onSubmit={(event) => this.handleEditStoreSubmit(event, store._id)}>
                                        <input onChange={this.handleStoreChange} type="text" name="name" placeholder={store.name} />
                                        <input onChange={this.handleStoreChange} type="text" name="description" placeholder={store.description} />
                                        <button onClick={this.closeStoreEditForm}>GO BACK</button>
                                        <button type="submit">UPDATE STORE</button>
                                    </form>
                                    : <div>
                                        <h2>{store.name}</h2>
                                        <h3>{store.description}</h3>
                                        <button onClick={() => this.deleteStore(store._id)}>DELETE STORE</button>
                                        <button onClick={() => this.showStoreEditForm(store._id)}>EDIT STORE</button>

                                        <button onClick={this.showProductForm} >NEW PRODUCT</button>
                                        {this.state.productForm
                                            ? <form onSubmit={(event) => this.handleProductSubmit(event, store._id)}>
                                                <input onChange={this.handleProductChange} type="text" name="name" placeholder="Product's Name" />
                                                <input onChange={this.handleProductChange} type="number" name="price" placeholder="Product's Price" />
                                                <input onChange={this.handleProductChange} type="text" name="description" placeholder="Product's Description" />
                                                <input onChange={this.handleProductChange} type="number" name="qty" placeholder="Number of Products in Stock" />
                                                <button type="submit">CREATE PRODUCT</button>
                                            </form>
                                            : null}
                                    </div>
                                }

                                {store.products.map((product, ind) => {
                                    return (

                                        <div key={ind}>
                                            {this.state.productToEdit == product._id
                                                ? <form onSubmit={(event) => this.handleEditProductSubmit(event, store._id, product._id)}>
                                                    <input onChange={this.handleProductChange} type="text" name="name" placeholder={product.name} />
                                                    <input onChange={this.handleProductChange} type="number" name="price" placeholder={product.price} />
                                                    <input onChange={this.handleProductChange} type="text" name="description" placeholder={product.description} />
                                                    <input onChange={this.handleProductChange} type="number" name="qty" placeholder={product.qty} />
                                                    <button type="submit">UPDATE</button>
                                                    <button onClick={this.closeProductEditForm}>GO BACK</button>
                                                </form>
                                                : <ul>
                                                    <li>Name: {product.name}</li>
                                                    <li>Price: ${product.price}</li>
                                                    <li>Description: {product.description}</li>
                                                    <li>QTY: {product.qty}</li>
                                                    <button onClick={() => this.deleteProduct(product._id, store._id)}>DELETE PRODUCT</button>
                                                    <button onClick={() => this.showProductEditForm(product._id)}>EDIT PRODUCT</button>
                                                </ul>}
                                        </div>

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