import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Header from '../header';
import ClassPlayerInfo from '../class-player-info';
import HunterPage from '../hunter-page';
// import ClassDetails from '../class-details';
// import ItemList from '../item-list';

import './app.css';

export default class App extends Component  {

  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render(){

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <Header />
        <ClassPlayerInfo />
        <HunterPage />
        {/* <HunterPage />
        <HunterPage /> */}
      </div>
    )
  };
}


