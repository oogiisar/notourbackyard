import React, { Component } from 'react';
import { Button, Required } from '../Utils/Utils';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import TokenService from '../services/token-service';
import notOurBackyardApiService from '../services/notourbackyard-api-service';
import './css/NewCleanup.css';


class NewCleanup extends Component {

    constructor(props){
        super(props)
        this.state = {
            status: null,
            country: '',
            region: '',
            typeList: []
        }
  
    }

    componentDidMount() {
        notOurBackyardApiService.getTypes()
        .then(types => {
            this.setState({typeList: types})
        })
        
    } 

    typeList() {
        if(this.state.typeList.length !== 0) {
            return this.state.typeList.map((type, i) => 
                <option key={i} value={type.enumlabel}>{type.enumlabel}</option>
            )
        }
    }

    getUserId() {
        const getAuthToken = TokenService.getAuthToken()
        const token = TokenService.parseJwt(getAuthToken)
        return token.user_is
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const user = this.getUserId()

        const { country, region, type_of_trash, quantity } = event.target
        notOurBackyardApiService.postCleanup(
            {
                country: country.value,
                region: region.value,
                type_of_trash: type_of_trash.value,
                quantity: quantity.value,
            },
            user
        )
        .then(
            this.setState({status: 'Your cleanup has been added'})
        )

    }


    selectCountry (val) {
        this.setState({country: val});
        this.setState({region: ''});
    }
    
    selectRegion (val) {
        this.setState({region: val});
    }

    renderLocation () {

        return (
            <>
                <label className='country_region_label'>
                    Country: 
                </label>
                <CountryDropdown
                    classes='country_region_box'
                    value={this.state.country}
                    name="country"
                    required
                    onChange={(val) => this.selectCountry(val)} 
                />
                <label className='country_region_label'>
                    Region: 
                </label>
                <RegionDropdown
                    classes='country_region_box'
                    country={this.state.country}
                    value={this.state.region}
                    name="region"
                    required
                    onChange={(val) => this.selectRegion(val)} 
                />

            </>

        )
    }
    

    render() {



        let content = 
            <section className="cleanup">
                <div className="itemBlock">
                    <h3><Required />Location </h3>
                    <div className="cleanup_item">
                        {this.renderLocation()}
                    </div>
                </div>
                <div className="itemBlock">
                    <h3><Required />Type of Trash </h3>
                    <p className="cleanup_item">
                        <select name="type_of_trash" className='country_region_box' required>
                            <option value="">--</option>
                            {this.state.typeList.length === 0 ? '' : this.typeList()}
                        </select>
                    </p>
                </div>
                <div className="itemBlock">
                    <h3><Required />Quantity </h3>
                    <input type="number" name="quantity" className="country_region_box" min="1" max="99" required/>
                </div>
            </section>

        return(
            <form 
                onSubmit={this.handleSubmit}
                className="myCleanups"
            >
                <h1>My Cleanups</h1>
                {this.state.status == null ? <></> : <p className='success'>{this.state.status}</p>}
                <section id="cleanupBox">
                    {content}
                </section>
                <Button type='submit'>
                    Submit
                </Button>
            </form>
        )
    };
}

export default NewCleanup;