import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    
    render() {
    const {
        new_user_route,
        logged_in,
        sign_in_route,
        sign_out_route,
        current_user
    } = this.props
    console.log(current_user)
     
        return (
            <div>
                <h1>Welcome to Apartment Worlds!</h1>
                                
                {/* {this.props.apartments && this.props.apartments.map((apartment) => {
                    return (
                        <div key={apartment.id}>
                            <h4>{apartment.city}</h4>
                        </div>
                    )
                })} */}
            </div>
        );
    }
}

export default Home;