import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service'
import logo from '../img/logo.png'
import './css/Header.css';

class Header extends Component {
    getUser() {
        const getAuthToken = TokenService.getAuthToken()
        const token = TokenService.parseJwt(getAuthToken)
        const user = token.user_is
        return user
    }

    accountStatus = () => {
        if(TokenService.hasAuthToken()) {
            return <Link to={`/${this.getUser()}/cleanup`} className="account_nav">My Account</Link>
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
                <Link to='/' className="logo"><img className="logo" src={logo} alt="Logo" /></Link>
                {this.accountStatus()}
            </nav>
        )
    };
}

export default Header;