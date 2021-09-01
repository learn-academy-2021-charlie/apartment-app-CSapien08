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
                <div className='home-page-nav'>  
                    <ul>
                        <a href='/apartmentIndex' className='btn btn-secondary'>Browse Apartments</a>
                    </ul>
                    
                    <ul>
                        {logged_in &&
                            <h3>Welcome back {current_user.email} </h3>
                        }
                        {!logged_in &&
                            <a href={new_user_route} className='btn btn-secondary'>Sign Up</a>
                        }
                        {!logged_in &&
                            <a href={sign_in_route} className='btn btn-secondary'>Sign In</a>
                        }
                    </ul>
                </div>
                
                
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