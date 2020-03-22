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
                    <li>Mongolia - 73829</li>
                    <li>United States - 56783</li>
                    <li>Belize  - 47892</li>
                    <li>Chile - 23849</li>
                    <li>Chad -  1239</li>
                </ul>
            </>
        )
    };
}

export default TopCountries;