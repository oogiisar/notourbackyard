import React, { Component } from 'react';
import { Button } from '../Utils/Utils';
import { withRouter } from "react-router-dom";
import TokenService from '../services/token-service';
import './css/Cleanup.css';

class Cleanup extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const getAuthToken = TokenService.getAuthToken()
        const token = TokenService.parseJwt(getAuthToken)
        const user = token.user_is

        this.props.history.push(`/${user}/newcleanup`)

    }
    
    render() {

        let data = this.props.data

        let user = data.data.user.find( 
            ({ uid }) =>
                // set this to by dynamic with backend implimentation
                uid === 1
        )

        let content = 
            user.cleanups.map((cleanup, i) => 
                <section key={i} className="cleanup">
                    <div className="itemBlock">
                        <h3>Location</h3>
                        <p className="cleanup_item">{cleanup.location}</p>
                    </div>
                    <div className="itemBlock"> 
                        <h3>Date</h3>
                        <p className="cleanup_item">{cleanup.date}</p>
                    </div>
                    <div className="itemBlock">
                        <h3>Type of Trash</h3>
                        <p className="cleanup_item">{cleanup.type_of_trash}</p>
                    </div>
                    <div className="itemBlock">
                        <h3>Quantity</h3>
                        <p className="cleanup_item">{cleanup.quantity}</p>
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