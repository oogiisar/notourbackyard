import React, { Component } from 'react';

class TopCountries extends Component {
    // Fetch to endpoint that retrieves top countris
    // Functionality will be implimented on the backend 
    // Database will select country name and all countries net cleanups 
    // Database will sort on the net cleanups column
    // Limit results to 5

    getTopCountries() {
        return (
            <ul>
                <li>Turkey - 923,320</li>
                <li>Mongolia - 158,434</li>
                <li>Chad -  525,320</li>
                <li>Chile - 52,720</li>
                <li>United States - 8,372</li>
            </ul>
        )
    }

    render() {

        return(
            <>
                <p>The Top 5 countries are</p>
                {this.getTopCountries()}
            </>
        )
    };
}

export default TopCountries;