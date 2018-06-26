import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {

    state={
        user: {},
    }

    getUser = () => {
        const userId = this.props.match.params.id

        axios.get(`/api/users/${userId}`).then(res=>
            this.setState({
                user: res.data.user
            })
        )
    }

    componentDidMount(){
        this.getUser()
    }

    render() {

        return (
            <div>
                <h1>Pofile</h1>
                <label htmlFor="e_mail">E-mail Address</label>
                <input type="text" name="e_mail" value={this.state.user.e_mail}/>

                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName" value={this.state.user.userName}/>
            </div>
        );
    }
}

export default UserProfile;