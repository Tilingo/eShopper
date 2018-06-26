import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {

    state={
        user: {}
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
                <ul>
                    <li>E-mail Address: {this.state.user.e_mail} </li>
                </ul>
            </div>
        );
    }
}

export default UserProfile;