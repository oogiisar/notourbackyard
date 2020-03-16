import React, { Component } from 'react';

import './css/Cleanup.css';

class Header extends Component {
    render() {
        return(
            <p>Hello {this.props.user}</p>
        )
    };
}

export default Header;