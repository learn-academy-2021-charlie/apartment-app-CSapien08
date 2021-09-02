import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer >
                <ul>
                    <NavLink to='/'>&copy; 2021 Apartment World</NavLink>
                </ul>
                <ul>
                    <NavLink to='/apartmentshow'>Apartments For Rent</NavLink>
                </ul>
            </footer>
        );
    }
}

export default Footer;