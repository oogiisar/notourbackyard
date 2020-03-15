import React, { Component } from 'react';
import CountrySelector from './CountrySelector';
import GarbageCount from './GarbageCount';
import './css/Overview.css';


class Overview extends Component {
    render() {
        return(
            <div className="overview_head">
                <h1>Not Our Backyard</h1>
                <h3>A place to share your efforts to clean up your community</h3>

                <CountrySelector 
                    getCountry={this.props.getCountry}
                    getRegion={this.props.getRegion}
                    country={this.props.country}
                    region={this.props.region}
                />

                <GarbageCount
                    country={this.props.country}
                    region={this.props.region}
                    data={this.props.data}
                />



            </div>
            
        )
    };
}

export default Overview;