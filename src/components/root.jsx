const express = require('express');


const root = express();
import React, { Component } from 'react';
import SignIn from './components/signin/SignIn.jsx';
import register from '/register/register.jsx'
import Navigation from '/navigation/Navigation.jsx'
class Root extends Component {
  constructor() {
    super();
    this.state = {
      route: 'SignIn',
      isSignedIn:'false'
    }
    }
  }

  componentDidMount(){

  }

  loadUser = (data) => {
    this.setState({user: {
      id: undefined,
      name: undefined,
      email: undefined,
      joined: undefined
    }})
  }
  onRoutechange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    }else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route });
  }
  render() {
    const { } = this.state;
    return (
    <div className="root">
       <Navigation onRoutechange={this.onRoutechange} />
        {this.state.route === 'home'}

        {
          this.state.route === 'SignIn '
        ? <SignIn onRoutechange={this.onRoutechange} />
      :<Register onRoutechange={this.onRoutechange} />
      }
      </div>
    );
  }
}

export default App;
