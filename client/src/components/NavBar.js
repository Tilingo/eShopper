import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import MobileNav from './styles/MobileNav';
import BurgerMenu from './styles/BurgerMenu';
import MobileMenuWrapp from './MobileMenuWrapp';

class NavBar extends Component {

    state = {
        burgerMenu: false
    }

    back = () => {
        this.props.history.goBack()
    }

    showMenu = () => {
        this.setState({ burgerMenu: !this.state.burgerMenu })
    }

    logOut = () => {
        localStorage.clear()
        this.props.history.push('/')
    }

    render() {

        const userId = localStorage.getItem('userId');
        const isLogged = localStorage.getItem('loggedIn');

        return (
            <MobileMenuWrapp>

                <MobileNav>
                    <button onClick={this.back}>
                        <FontAwesomeIcon icon={faArrowLeft} size="3x" />
                    </button>

                    <h1>eShopper</h1>

                    <button onClick={this.showMenu}>
                        <FontAwesomeIcon icon={faBars} size="3x" />
                    </button>
                </MobileNav>


                {this.state.burgerMenu
                    ? <BurgerMenu>
                        <Link to="/" >Home</Link>
                        {isLogged
                            ? <div>
                                <Link to={`/users/${userId}`} >Profile</Link>
                                <button onClick={this.logOut}>Log Out</button>
                            </div>

                            : null}
                    </BurgerMenu>
                    : null}



            </MobileMenuWrapp>
        );
    }
}

export default withRouter(NavBar);