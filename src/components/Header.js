import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

class Header extends Component {

    accountStatus = () => {
        if(this.props.loggedIn  === 'true') {
            return <Link to={`/${this.props.user}/cleanup`} className="account_nav">My Account</Link>
        } else {
            return (
                <>
                    <Link to='/login' className="account_nav">Login</Link>
                    <Link to='/signup' className="account_nav">Sign Up</Link>
                </>
            )
        }
    }

    render() {
        return(
            <nav role="navigation">
                <Link to='/' id="logo">Logo</Link>
                {this.accountStatus()}
            </nav>
        )
    };
}

export default Header;