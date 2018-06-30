import React, { Component } from 'react';
import axios from 'axios'
import alertify from 'alertify.js'
import { ThemeProvider } from 'styled-components';
import { Button, primary, danger, edit, create } from './styles/Button';
import FormWrapp from './styles/FormWrap';
import UserProfileWrap from './styles/UserProfileWrap';
import UserInfoWrap from './styles/UserInfoWrap';
import ButtonsWrap from './styles/ButtonsWrap';
import ProductWrap from './styles/ProductWrap';

class UserProfile extends Component {

    state = {
        user: {
            stores: []
        },
        userForm: false,
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

    showUserForm = () => {
        this.setState({ userForm: !this.state.userForm })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const userId = this.state.user._id

        axios.patch(`/api/users/${userId}`, this.state.user).then((res) => {
            this.props.history.push(`/users`)
            this.props.history.push(`/users/${res.data.user._id}`)
            alertify.success("User Updated");
        })
    }
    
    deleteUser = () => {
        const userId = this.state.user._id

        axios.delete(`/api/users/${userId}`).then(res => {
            alertify.success("User Deleted");
            localStorage.clear()
            this.props.history.push(`/`)
        })
    }

    confirmUserDelete = () => {

        let that = this

        alertify
            .okBtn("DELETE")
            .cancelBtn("CANCEL")

        alertify.confirm("Are you sure you want to delete this user?", function () {
            that.deleteUser()
        }, function () {
            alertify.log("Phew! That was close!");
        });

    }
    //////////END OF USERS FUNCTIONS//////

    //////////STORE FUNCTIONS//////////
    showStoreForm = () => {
        this.setState({ storeForm: !this.state.storeForm })
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
            alertify.success("New Store Created");
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
            alertify.success("Store Updated");

        })
    }

    deleteStore = (id) => {
        const userId = this.state.user._id

        axios.delete(`/api/users/${userId}/stores/${id}`).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
            alertify.success("Store Deleted")
        })
    }

    confirmStoreDelete = (id) => {

        let that = this

        alertify
            .okBtn("DELETE")
            .cancelBtn("CANCEL")

        alertify.confirm("Are you sure you want to delete this store?", function () {
            that.deleteStore(id)
        }, function () {
            alertify.log("Phew! That was close!");
        });
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
            alertify.success("New Product Created");
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
            alertify.success("Product Updated")
        })
    }

    deleteProduct = (productId, storeId) => {
        const userId = this.state.user._id
        axios.delete(`/api/users/${userId}/stores/${storeId}/products/${productId}`).then((res) => {
            this.props.history.push(`/users/`)
            this.props.history.push(`/users/${userId}`)
            alertify.success("Product Deleted")
        })
    }

    confirmProductDelete = (productId, storeId) => {

        let that = this

        alertify
            .okBtn("DELETE")
            .cancelBtn("CANCEL")

        alertify.confirm("Are you sure you want to delete this product?", function () {
            that.deleteProduct(productId, storeId)
        }, function () {
            alertify.log("Phew! That was close!");
        });
    }
    ///////END OF PRODUCT FUNCTIONS

    componentDidMount() {
        this.getUser()
    }

    render() {

        const user = this.state.user

        return (
            <UserProfileWrap>

                <UserInfoWrap>
                    <h1>Profile</h1>
                    {this.state.userForm
                        ? <FormWrapp onSubmit={this.handleSubmit}>
                            <label htmlFor="e_mail">E-mail Address</label>
                            <input onChange={this.handleChange} type="text" name="e_mail" value={user.e_mail} />

                            <label htmlFor="userName">User Name</label>
                            <input onChange={this.handleChange} type="text" name="userName" value={user.userName} />

                            <ThemeProvider theme={primary}>
                                <Button type="submit">UPDATE</Button>
                            </ThemeProvider>

                        </FormWrapp>
                        : <div>
                            <h3>User Name: {user.userName}</h3>
                            <h3>E-mail: {user.e_mail}</h3>
                        </div>}

                    <ButtonsWrap>

                        <ThemeProvider theme={edit}>
                            <Button onClick={this.showUserForm}>EDIT USER</Button>
                        </ThemeProvider>

                        <ThemeProvider theme={create}>
                            <Button onClick={this.showStoreForm}>NEW STORE</Button>
                        </ThemeProvider>

                        <ThemeProvider theme={danger}>
                            <Button onClick={this.confirmUserDelete}>DELETE USER</Button>
                        </ThemeProvider>

                    </ButtonsWrap>

                    {this.state.storeForm
                        ? <FormWrapp onSubmit={this.handleStoreSubmit}>
                            <input onChange={this.handleStoreChange} type="text" name="name" placeholder="My Example's Store" />
                            <input onChange={this.handleStoreChange} type="text" name="description" placeholder="My store is amazing and has great products" />
                            <ThemeProvider theme={primary}>
                                <Button type="submit" >CREATE STORE</Button>
                            </ThemeProvider>
                        </FormWrapp>
                        : null}
                </UserInfoWrap>





                {user.stores.map((store, i) => {

                    return (
                        <UserInfoWrap key={i}>

                            {this.state.storeToEdit === store._id
                                ? <FormWrapp onSubmit={(event) => this.handleEditStoreSubmit(event, store._id)}>

                                    <label htmlFor="name">Store's name</label>
                                    <input onChange={this.handleStoreChange} type="text" name="name" placeholder={store.name} />

                                    <label htmlFor="name">Store's description</label>
                                    <input onChange={this.handleStoreChange} type="text" name="description" placeholder={store.description} />

                                    <ButtonsWrap>
                                        <Button onClick={this.closeStoreEditForm}>GO BACK</Button>

                                        <ThemeProvider theme={primary}>
                                            <Button type="submit" >UPDATE STORE</Button>
                                        </ThemeProvider>
                                    </ButtonsWrap>

                                </FormWrapp>
                                : <div>
                                    <h2>{store.name}</h2>
                                    <h3>{store.description}</h3>

                                    <ButtonsWrap>
                                        <ThemeProvider theme={edit}>
                                            <Button onClick={() => this.showStoreEditForm(store._id)}>EDIT STORE</Button>
                                        </ThemeProvider>
                                        <ThemeProvider theme={create}>
                                            <Button onClick={this.showProductForm}>NEW PRODUCT</Button>
                                        </ThemeProvider>
                                        <ThemeProvider theme={danger}>
                                            <Button onClick={() => this.confirmStoreDelete(store._id)}>DELETE STORE</Button>
                                        </ThemeProvider>
                                    </ButtonsWrap>

                                    {this.state.productForm
                                        ? <FormWrapp onSubmit={(event) => this.handleProductSubmit(event, store._id)}>
                                            <input onChange={this.handleProductChange} type="text" name="name" placeholder="Product's Name" />
                                            <input onChange={this.handleProductChange} type="number" name="price" placeholder="Product's Price" />
                                            <input onChange={this.handleProductChange} type="text" name="description" placeholder="Product's Description" />
                                            <input onChange={this.handleProductChange} type="number" name="qty" placeholder="Number of Products in Stock" />
                                            <ThemeProvider theme={create}>
                                                <Button type="submit">CREATE PRODUCT</Button>
                                            </ThemeProvider>
                                        </FormWrapp>
                                        : null}
                                </div>
                            }

                            {store.products.map((product, ind) => {
                                return (

                                    <div key={ind}>
                                        {this.state.productToEdit === product._id
                                            ? <FormWrapp onSubmit={(event) => this.handleEditProductSubmit(event, store._id, product._id)}>
                                                <input onChange={this.handleProductChange} type="text" name="name" placeholder={product.name} />
                                                <input onChange={this.handleProductChange} type="number" name="price" placeholder={product.price} />
                                                <input onChange={this.handleProductChange} type="text" name="description" placeholder={product.description} />
                                                <input onChange={this.handleProductChange} type="number" name="qty" placeholder={product.qty} />

                                                <ButtonsWrap>
                                                    <ThemeProvider theme={primary}>
                                                        <Button type="submit">UPDATE</Button>
                                                    </ThemeProvider>
                                                    <Button onClick={this.closeProductEditForm}>GO BACK</Button>
                                                </ButtonsWrap>

                                            </FormWrapp>
                                            : <ProductWrap>
                                                <h3>{product.name}</h3>
                                                <p><span>Price:</span> ${product.price}</p>
                                                <p><span>Description:</span> {product.description}</p>
                                                <p><span>QTY:</span> {product.qty}</p>

                                                <ButtonsWrap>
                                                    <ThemeProvider theme={edit}>
                                                        <Button onClick={() => this.showProductEditForm(product._id)}>EDIT PRODUCT</Button>
                                                    </ThemeProvider>
                                                    <ThemeProvider theme={danger}>
                                                        <Button onClick={() => this.confirmProductDelete(product._id, store._id)}>DELETE PRODUCT</Button>
                                                    </ThemeProvider>
                                                </ButtonsWrap>
                                            </ProductWrap>}
                                    </div>

                                )
                            })}
                        </UserInfoWrap>
                    )
                })}

            </UserProfileWrap>
        );
    }
}

export default UserProfile;