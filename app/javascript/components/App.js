import React, { Component } from 'react';
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import { 
  BrowserRouter as Router,
  Route, 
  Switch } 
from 'react-router-dom';

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
  
  render() {
    const {
      logged_in,
      new_user_route,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    console.log(logged_in)
    console.log(new_user_route)
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
            <Route exact path='/' render={(props) => {
              return <Home logged_in={logged_in}
                           sign_in_route={sign_in_route}
                           sign_out_route={sign_out_route}
                           new_user_route={new_user_route} 
                           current_user={current_user}
                      />
              }}
            />
          </Switch>
          <Footer />
        </Router>        
      </>
    );
  }
}
export default App;
