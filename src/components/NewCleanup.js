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
            status: '',
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
            <div>
            
                <label>
                Country: 
                    <CountryDropdown
                        
                        value={this.state.country}
                        name="country"
                        required
                        style={{
                            width: '70px'
                        }}
                        onChange={(val) => this.selectCountry(val)} 
                    />
                </label>
                <label>
                Region: 
                    <RegionDropdown
                        country={this.state.country}
                        value={this.state.region}
                        name="region"
                        required
                        style={{
                            width: '70px'
                        }}
                        onChange={(val) => this.selectRegion(val)} 
                    />
                </label>

            </div>

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
                        <select name="type_of_trash" required>
                            <option value="">--</option>
                            {this.state.typeList.length === 0 ? '' : this.typeList()}
                        </select>
                    </p>
                </div>
                <div className="itemBlock">
                    <h3><Required />Quantity </h3>
                    <input type="number" name="quantity" className="cleanup_item quantity" min="1" max="99" required/>
                </div>
            </section>

        return(
            <form 
                onSubmit={this.handleSubmit}
                className="myCleanups"
            >
                <h1>My Cleanups</h1>
                <h2 className='status'>{this.state.status}</h2>
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