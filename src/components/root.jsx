import React, { Component } from 'react';

class Root extends Component {
  constructor() {
    super();
    this.state = {

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

  render() {
    const { } = this.state;
    return (

    );
  }
}

export default App;
