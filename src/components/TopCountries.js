import React, { Component } from 'react';
import notOurBackyardApiService from '../services/notourbackyard-api-service';
import './css/Overview.css'

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
                <li key={i} className="top5">{country.country_name} - {country.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kg</li>
            ))
            return topCountries
        }
    }

    render() {

        return(
            <div id="top5_list">
                <p id="top5">Top 5 Countries:</p>
                <ul>
                    {this.getCountries()}
                </ul>
            </div>
        )
    };
}

export default TopCountries;