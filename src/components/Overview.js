import React, { Component } from 'react';
import CountrySelector from './CountrySelector';
import GarbageCount from './GarbageCount';
import TopCountries from './TopCountries';
import './css/Overview.css';


class Overview extends Component {

    constructor(props){
        super(props)
        this.state = {
            country: 'World',
            region: null
        }
    }

    getCountry = (country) => {
        this.setState({
          country: country
        });
      }
    
      getRegion = (region) => {
        this.setState({
          region: region
        })
      }

    render() {
        return(
            <div className="overview">
                <h1>Not Our Backyard</h1>
                <h3>Keep the Community Clean and the Earth Green</h3>

                <section className='country_selector'>
                    <CountrySelector 
                        getCountry={this.getCountry}
                        getRegion={this.getRegion}
                        country={this.state.country}
                        region={this.state.region}
                    />
                </section>

                <GarbageCount
                    country={this.state.country}
                    region={this.state.region}
                />

                <TopCountries />



            </div>
            
        )
    };
}

export default Overview;