import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MobileNav from './styles/MobileNav';
import BurgerMenu from './styles/BurgerMenu';
import NavBarWrapp from './styles/NavBarWrapp';
import GoBack from './GoBack';

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
            <NavBarWrapp>

                <MobileNav>

                    <GoBack goBack={this.back} />

                    <h1>eShopper</h1>

                    <button onClick={this.showMenu}>
                        {this.state.burgerMenu
                            ? <FontAwesomeIcon icon={faTimes} size="3x" />
                            : <FontAwesomeIcon icon={faBars} size="3x" />}
                    </button>

                    <BurgerMenu>
                        <Link to="/" >Home</Link>
                        {isLogged
                            ? <div>
                                <Link to={`/users/${userId}`} >Profile</Link>
                                <button onClick={this.logOut}>Log Out</button>
                            </div>

                            : null}
                    </BurgerMenu>
                </MobileNav>


                {this.state.burgerMenu
                    ? <BurgerMenu>
                        <Link to="/">Home</Link>
                        {isLogged
                            ? <div>
                                <Link to={`/users/${userId}`}>Profile</Link>
                                <button onClick={this.logOut}>Log Out</button>
                            </div>

                            : null}
                    </BurgerMenu>
                    : null}



            </NavBarWrapp>
        );
    }
}

export default withRouter(NavBar);