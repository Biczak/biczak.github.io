import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 'Home',
    };
  }

  render() {
    return (
      <div>
        <h1>Coming Soon!</h1>
      </div>
    );
  };
};

export default hot(module)(App);