import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, Collapse, CardBody, CardText } from 'reactstrap'

class ApartmentShow extends Component {
    render() {
        let {apartment} = this.props
        return (
            <div>
                {apartment &&
                 <Card body className="card-show">
                    <CardTitle tag="h5">Featured Apartment</CardTitle>
                    
                    <CardText>Address: {apartment.street} {apartment.city}, {apartment.state}</CardText>
                    <CardText>Price: ${apartment.price}</CardText>
                    <CardText>Beds: {apartment.bedrooms} <br></br>
                              Baths: {apartment.bathrooms}
                    </CardText>
                    <CardText>Pets: {apartment.pets}</CardText>
                    <CardText>Manager: {apartment.manager} <br></br>
                              Email: {apartment.email}
                    </CardText>
                </Card>}
            </div>
        );
    }
}

export default ApartmentShow;