import React, { Component } from 'react';
import { Button } from '../Utils/Utils';
import { Link } from 'react-router-dom';
import './css/Cleanup.css';

class Cleanup extends Component {
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
            <section className="myCleanups">
                <h1>My Cleanups</h1>
                <section id="cleanupBox">
                    {content}
                </section>
                <Link to={`/${this.props.user}/newcleanup`}>
                    <Button type='submit'>
                        New Cleanup
                    </Button>
                </Link>
            </section>
        )
    };
}

export default Cleanup;