import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Header from '../header';
import ClassPlayerInfo from '../class-player-info';
import HunterPage from '../hunter-page';
import ClassDetails from '../class-details';
import MagePage from '../mage-page';
import PriestPage from '../priest-page';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <Router>
        <div>
          <Header />
          <ClassPlayerInfo />

          <Route path="/"
                render={() => <h2>Welcome to HearthStone</h2>}
                exact />
          <Route path="/hunter/:cardId?" component={HunterPage} />

          <Route path="/mage/" component={MagePage} />
          <Route path="/priest/" exact component={PriestPage} />
          <Route path="/priest/:cardId"
                render={({match, location, history}) => {
                const {cardId} = match.params;
                return  <ClassDetails cardId={cardId} /> }} />

        </div>
      </Router>
    )
  };
}


