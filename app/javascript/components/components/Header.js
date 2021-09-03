import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import apartmentLogo from '../assets/apartment img.png'

class Header extends Component {
    render() {
        const {
            new_user_route,
            logged_in,
            sign_in_route,
            sign_out_route
        } = this.props
        return (
            <header>
                <NavLink to='/'>
                <img 
                    src={apartmentLogo}
                    alt='brand image'
                    width='150px'
                    height='150px'
                />
                </NavLink>
                <div className="nav-links">
                    <ul>
                        <NavLink to="/apartmentindex">Browse</NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/apartmentnew">Add a Listing</NavLink>
                    </ul>
                    <ul>
                        {logged_in &&
                            <a href={sign_out_route} >Sign Out</a>
                        }
                        {!logged_in &&
                            <a href={sign_in_route} >Sign In/Sign Up </a>
                        }
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;