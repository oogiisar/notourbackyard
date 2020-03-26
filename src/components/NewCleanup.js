import React, { Component } from 'react';
import { Button } from '../Utils/Utils';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import TokenService from '../services/token-service';
import DatePicker from 'react-date-picker';
import { withRouter } from "react-router-dom";
import './css/NewCleanup.css';

//Add new data functionality with backend build

class NewCleanup extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const getAuthToken = TokenService.getAuthToken()
        const token = TokenService.parseJwt(getAuthToken)
        const user = token.user_is

        this.props.history.push(`/${user}/cleanup`)

    }

    state = {
        date: new Date()
      }


    selectCountry (val) {
        this.props.getNewCountry(val);
        this.props.getNewRegion('');
    }
    
    selectRegion (val) {
        this.props.getNewRegion(val);
    }

    renderLocation () {

        return (
            <div>
            
                <label>
                    Country: 
                    <CountryDropdown
                        showDefaultOption={false}
                        value={this.props.newcountry}
                        style={{
                            width: '70px'
                        }}
                        onChange={(val) => this.selectCountry(val)} 
                    />
                </label>
                <label>
                    Region: 
                    <RegionDropdown
                        country={this.props.newcountry}
                        value={this.props.newregion}
                        style={{
                            width: '70px'
                        }}
                        onChange={(val) => this.selectRegion(val)} 
                    />
                </label>

            </div>

        )
    }

    onChange = date => {
        this.setState({ date })
    }

    renderTypes() {
        let types = this.props.data.data.trash_types
        
        
        let typeList = 
            types.map((type, i) => 
                <option key={i}>{type}</option>
            )

        return typeList
    } 
    
    

    render() {



        let content = 
            <section className="cleanup">
                <div className="itemBlock">
                    <h3>Location</h3>
                    <div className="cleanup_item">
                        {this.renderLocation()}
                    </div>
                </div>
                <div className="itemBlock"> 
                    <h3>Date</h3>
                    <div className="cleanup_item">
                        <DatePicker 
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                </div>
                <div className="itemBlock">
                    <h3>Type of Trash</h3>
                    <p className="cleanup_item">
                        <select>
                            {this.renderTypes()}
                        </select>
                    </p>
                </div>
                <div className="itemBlock">
                    <h3>Quantity</h3>
                    <input type="number" className="cleanup_item quantity" min="1" max="99"/>
                </div>
            </section>

        return(
            <form 
                onSubmit={this.handleSubmit}
                className="myCleanups"
            >
                <h1>My Cleanups</h1>
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

export default withRouter(NewCleanup);