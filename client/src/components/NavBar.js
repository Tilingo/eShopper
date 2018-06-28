import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        this.state.burgerMenu ? this.setState({ burgerMenu: false }) : this.setState({ burgerMenu: true })
    }

    render() {
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
                        <Link to="/" >Home</Link>
                        <Link to="/" >Home</Link>
                    </BurgerMenu>
                    : null}


            </MobileMenuWrapp>
        );
    }
}

export default NavBar;