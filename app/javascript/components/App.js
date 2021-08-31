import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      apartments: []
    }
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
  componentDidMount(){
    this.getApartments()
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    console.log(current_user)
    console.log(this.state.apartments)
    return (
      <>
        <h1>Hello World</h1>
        { logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        
      </>
    );
  }
}
export default App;
