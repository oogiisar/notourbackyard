import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
 
 
class CountrySelector extends Component {
    
    selectCountry (val) {
        this.props.getCountry(val);
        this.props.getRegion('');
    }
    
    selectRegion (val) {
        this.props.getRegion(val);
    }

    renderRegion () {
        let country = this.props.country
        let region = this.props.region

        if(country !== 'World' ) {
            return (
                <label>
                    Region: 
                    <RegionDropdown
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)} 
                    />
                </label>
            )
        }
    }
 
  render () {

    return (
        <div>
            
            <label>
                Country: 
                <CountryDropdown
                    showDefaultOption={false}
                    value={this.props.country}
                    onChange={(val) => this.selectCountry(val)} 
                />
            </label>
            {this.renderRegion()}

        </div>
    );
  }
}

export default CountrySelector;