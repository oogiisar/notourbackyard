import React, { Component } from 'react';
import notOurBackyardApiService from '../services/notourbackyard-api-service';

class GarbageCount extends Component {
    constructor(props){
        super(props)
        this.state = {
            amount: null
        }
  
    }

    componentDidMount() {
        notOurBackyardApiService.getCleanupCount(this.props.country)
        .then(amount => this.setState({amount: amount}))
    }

    componentDidUpdate(prevProps) {
        if(prevProps.country !== this.props.country) {
            notOurBackyardApiService.getCleanupCount(this.props.country)
            .then(amount => this.setState({amount: amount}))
        } else if( prevProps.region !== this.props.region ) {
            notOurBackyardApiService.getCleanupCount(`${this.props.country}/${this.props.region}`)
            .then(amount => this.setState({amount: amount}))
        }
    }
    
    amount () {
        let country = this.props.country


        if(country == null) {
            return 0
        } else {
            if(this.state.amount == null || this.state.amount.length === 0) {
                return 0
            } else {
                return this.state.amount[0].sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        } 
    }

    location () {
        let country = this.props.country
        let region = this.props.region
        let world = country === 'World' ? 'the ' : ''
        let location = region == null ? country : country + ', ' + region
        return world + location
    }



    render() {

        return(
            <p id="garbage_count">{this.amount()} kg of garbage picked up in {this.location()}</p>
        )
    };
}

export default GarbageCount;