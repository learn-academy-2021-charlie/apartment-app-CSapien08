import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, Collapse, CardBody, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component {
    constructor(){
        super();
        this.state ={
            isOpen: false,
        }
    }
    // handleClick = (id) => {
    //      this.setState({isOpen: !this.state.isOpen, index: id})
    // }

    render() {
        console.log(this.props.apartments)
        return (
            <div>
                <h2>Current Browsing List</h2>
                <div className="index-cards">
                    {this.props.apartments && this.props.apartments.map(apartment => {
                        return (
                            <Row key={apartment.id}>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle tag="h5">Apartment #{apartment.id}</CardTitle>
                                        <CardText>Address: {apartment.street} {apartment.city}, {apartment.state}</CardText>
                                        <CardText>Beds: {apartment.bedrooms}, 
                                                  Baths: {apartment.bathrooms}
                                        </CardText>
                                        <NavLink to={`/apartmentshow/${apartment.id}`}>
                                            <Button>More Info</Button>
                                        </NavLink>
                                    </Card>
                                </Col>
                            </Row>
                        )})}
                </div>
            </div>
        );
    }
}

export default ApartmentIndex;

//For a later time, I wanted to have drop down boxes that 
{/*<Button onClick={ this.toggle(apartment.id) }>More Info</Button>
     <Collapse isOpen={apartment.id === this.state.index}>
    <Card>
        <CardBody>
            Testing 123
        </CardBody>
    </Card>
</Collapse> */}