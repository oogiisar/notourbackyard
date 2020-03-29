import React, { Component } from 'react';
import notOurBackyardApiService from '../services/notourbackyard-api-service';

class TopCountries extends Component {

    constructor(props){
        super(props)
        this.state = {
            countries: null
        }
  
    }

    componentDidMount() {
        notOurBackyardApiService.getTopCountries()
        .then(countries => this.setState({countries: countries}))
    }

    getCountries() {
        let topCountries = []

        if(this.state.countries == null) {
            return ''
        } else {
            topCountries = this.state.countries.map( (country, i) => (
                <li key={i}>{country.country_name} - {country.sum.toLocaleString(navigator.language, { minimumFractionDigits: 0})}</li>
            ))
            return topCountries
        }
    }

    render() {

        return(
            <>
                <p>The Top 5 countries are</p>
                <ul>
                    {this.getCountries()}
                </ul>
            </>
        )
    };
}

export default TopCountries;