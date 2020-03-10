import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import TopBar from 'Components/TopBar';
import Projects from './Projects';
import GlobalStyle from '../createGlobalStyle';

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
        <GlobalStyle />
        {/* <TopBar /> */}
        <Projects />
      </div>
    );
  };
};

export default hot(module)(App);