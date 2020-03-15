import React, { Component } from 'react';

class GarbageCount extends Component {
    amount () {
        let data = this.props.data
        let country = this.props.country
        let region = this.props.region

        if(data.data[country] == null) {
            return 0
        } else if(Object.entries(region).length === 0) {
            return data.data[country].garbage_pieces
        } else if(data.data[country].Regions[region] == null) {
            return 0
        }
        
        return data.data[country].Regions[region].garbage_pieces
    }

    location () {
        let country = this.props.country
        let region = this.props.region
        let world = country === 'World' ? 'the ' : ''
        let location = Object.entries(region).length === 0 ? country : country + ', ' + region
        return world + location
    }



    render() {

        return(
            <div>
                <p>{this.amount()} Pieces of garbage have been picked up in {this.location()}</p>
                <p></p>
            </div>
        )
    };
}

export default GarbageCount;