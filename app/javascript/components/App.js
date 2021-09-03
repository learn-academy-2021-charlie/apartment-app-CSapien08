import React, { Component } from 'react';
//Components
import Header from './components/Header'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import NotFound from './pages/NotFound'

//React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.getApartments()
  }

  getApartments = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentsArray => {
      // set the state with the data from the backend into the empty array
      this.setState({ apartments: apartmentsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewListing = (newListing) => {
    fetch('/apartments', {
      body: JSON.stringify(newListing),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(() => this.getApartments())
    .catch(errors => console.log('Create errors:', errors))
  }
  
  updateListing = (listing, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(listing),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("There was something wrong with the submission")
      }
      return response.json()
    })
    .then(() => this.getApartments())
    .catch(errors => console.log('edit errors:', errors))
  }

  render() {
    const {
      logged_in,
      new_user_route,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    
    return (
      <>
        <Router>
          <Header 
            logged_in={logged_in}
            sign_in_route={sign_in_route}
            sign_out_route={sign_out_route}
            new_user_route={new_user_route}
          />
          <Switch> 
            <Route exact path='/' component={ Home }  />

            <Route path='/apartmentindex' render={(props) => 
              <ApartmentIndex apartments={ this.state.apartments} />} />

            {logged_in && 
              <Route path='/apartmentedit/:id' render={ (props) => {
                  let apartment = this.state.apartments.find(apartment => apartment.id === +props.match.params.id)
                  return (<ApartmentEdit updateListing={this.updateListing} current_user={ current_user } apartment={ apartment } />)}} />
            }
            
            <Route path='/apartmentshow/:id' render={(props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === +id)
                return <ApartmentShow apartment={apartment} /> }} />

            {logged_in && 
              <Route path='/apartmentnew' render={ (props) => {
                return <ApartmentNew createNewListing={this.createNewListing} current_user={current_user} /> }}/>
            }
            
            <Route component={ NotFound } />
          </Switch>
          <Footer />
        </Router>        
      </>
    );
  }
}
export default App;
