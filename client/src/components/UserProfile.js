import React, { Component } from 'react';
import axios from 'axios'

class UserProfile extends Component {

    getUser = () => {
        const userId = this.props.match.params.id
        console.log(userId)

        axios.get(`/api/users/${userId}`).then(res=>
            console.log(res)
        )
    }

    componentDidMount(){
        this.getUser()
    }

    render() {

        return (
            <div>
                {
                    // this.props.users.find(user=> user._id === this.props.match.params.id).userName
                }
            </div>
        );
    }
}

export default UserProfile;