import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

class Header extends Component {
    render() {
        return(
            <nav role="navigation">
                <Link to='/' id="logo">Logo</Link>
                <Link to='/login' className="account_nav">Login</Link>
                <Link to='/signup' className="account_nav">Sign Up</Link>
            </nav>
        )
    };
}

export default Header;