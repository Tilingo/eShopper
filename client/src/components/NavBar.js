import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './styles/MobileNav';
import BurgerMenu from './styles/BurgerMenu';
import NavBarWrap from './styles/NavBarWrap';
import GoBack from './GoBack';
import alertify from 'alertify.js'

class NavBar extends Component {

    back = () => {
        this.props.history.goBack()
    }

    logOut = () => {
        localStorage.clear()
        this.props.history.push('/')
    }

    confirmLogOut = () => {

        let that = this

        alertify
            .okBtn("LOG OUT")
            .cancelBtn("CANCEL")

        alertify.confirm("Are You Sure You Want to Log Out?", function () {
            that.logOut()
        }, function () {
            alertify.log("You Are Still Logged In");
        });
    }

    render() {

        const userId = localStorage.getItem('userId');
        const isLogged = localStorage.getItem('loggedIn');

        return (
            <NavBarWrap>

                <MobileNav>

                    <GoBack goBack={this.back} />

                    <h1>eShopper</h1>

                    <button onClick={this.props.showMenu}>
                        {this.props.burgerMenu
                            ? <FontAwesomeIcon icon={faTimes} size="3x" />
                            : <FontAwesomeIcon icon={faBars} size="3x" />}
                    </button>

                    <BurgerMenu>
                        <Link to="/" >Home</Link>
                        {isLogged
                            ? <div>
                                <Link to={`/users/${userId}`} >Profile</Link>
                                <button onClick={this.confirmLogOut}>Log Out</button>
                            </div>

                            : null}
                    </BurgerMenu>
                </MobileNav>


                {this.props.burgerMenu
                    ? <BurgerMenu>
                        <Link to="/">Home</Link>
                        {isLogged
                            ? <div>
                                <Link to={`/users/${userId}`}>Profile</Link>
                                <button onClick={this.confirmLogOut}>Log Out</button>
                            </div>

                            : null}
                    </BurgerMenu>
                    : null}



            </NavBarWrap>
        );
    }
}

export default withRouter(NavBar);