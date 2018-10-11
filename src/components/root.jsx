const express = require('express');


const root = express();
import React, { Component } from 'react';
import SignIn from './components/signin/SignIn.js';
class Root extends Component {
  constructor() {
    super();
    this.state = {
      route: 'SignIn'
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
onRoutechange = () =>{
  this.setState({route:'home'});
}

  render() {
    const { } = this.state;
    return (
    <div className="root">
      {this.state.route === 'SignIn'
        ? <Signin onRoutechange={this.onRoutechange}/>
    </div>
    );
  }
}

export default App;
