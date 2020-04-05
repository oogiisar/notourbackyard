import React, { Component } from 'react';
import { Button } from '../Utils/Utils';
import notOurBackyardApiService from '../services/notourbackyard-api-service';
import { withRouter } from "react-router-dom";
import TokenService from '../services/token-service';
import './css/Cleanup.css';

class Cleanup extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
  
    }

    getUserId() {
        const getAuthToken = TokenService.getAuthToken()
        const token = TokenService.parseJwt(getAuthToken)
        let user = token == null ? 'nouser' : token 
        return user.user_is
    }

    componentDidMount() {
        let user  = this.getUserId()
        // Prevent people from browsing to users that is not their user
        if(this.props.match.params.user !== user) {
            this.props.history.push(`/${user}/cleanup`)
        }
        notOurBackyardApiService.getCleanups(user)
        .then( data =>
            this.setState({data: data})
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let user = this.getUserId()
        this.props.history.push(`/${user}/newcleanup`)

    }
    
    formatDate(date) {
        // Cleanup the ISO time that is provided from the DB
        date = new Date(date);
        return (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear()
    }
    
    render() {

        let content = 
            this.state.data.map((cleanup, i) => 
                <section key={i} className="cleanup">
                    <div className="itemBlock">
                        <h3>Location</h3>
                        <p className="cleanup_item">{cleanup.region_name}</p>
                    </div>
                    <div className="itemBlock"> 
                        <h3>Date</h3>
                        <p className="cleanup_item">{this.formatDate(cleanup.date)}</p>
                    </div>
                    <div className="itemBlock">
                        <h3>Type of Trash</h3>
                        <p className="cleanup_item">{cleanup.type_of_trash}</p>
                    </div>
                    <div className="itemBlock">
                        <h3>Quantity</h3>
                        <p className="cleanup_item">{cleanup.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kg</p>
                    </div>
                </section>
            )


        return(
            <form 
                className="myCleanups"
                onSubmit={this.handleSubmit}
            >
                <h1>My Cleanups</h1>
                <section id="cleanupBox">
                    {content}
                </section>
                <Button type='submit'>
                    New Cleanup
                </Button>
            </form>
        )
    };
}

export default withRouter(Cleanup);