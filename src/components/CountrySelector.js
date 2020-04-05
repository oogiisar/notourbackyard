import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import './css/CountrySelector.css';
 
 
class CountrySelector extends Component {
    
    selectCountry (val) {
        // Updates the dropdown for country and resets region for the new country
        this.props.getCountry(val);
        this.props.getRegion('');
    }
    
    selectRegion (val) {
        // updates the dropdown for region
        this.props.getRegion(val);
    }

    renderRegion () {
        let country = this.props.country
        let region = this.props.region
        // Special handling to only display country if World is selected and no region
        if(country !== 'World' ) {
            return (
                <>
                    <label className='country_region_label'>
                        Region: 
                    </label>
                    <RegionDropdown
                        classes='country_region_box'
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)} 
                    />
                </>
            )
        }
    }
 
  render () {

    return (
        <section className='country_selector'>
            <label className='country_region_label'>
                Country: 
            </label>
            <CountryDropdown
                    classes='country_region_box'
                    showDefaultOption={false}
                    value={this.props.country}
                    onChange={(val) => this.selectCountry(val)} 
                />
            {this.renderRegion()}

        </section>
    );
  }
}

export default CountrySelector;