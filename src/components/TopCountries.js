import React, { Component } from 'react';

class TopCountries extends Component {

    render() {
    

        // Fetch to endpoint that retrieves top countris
        // Functionality will be implimented on the backend 
        // Database will select country name and all countries net cleanups 
        // Database will sort on the net cleanups column
        // Limit results to 5

        return(
            <>
                <p>The Top 5 countries are</p>
                <ul>
                    <li>Turkey - 923320</li>
                    <li>Mongolia - 158434</li>
                    <li>Chad -  525320</li>
                    <li>Chile - 52720</li>
                    <li>United States - 8372</li>
                </ul>
            </>
        )
    };
}

export default TopCountries;