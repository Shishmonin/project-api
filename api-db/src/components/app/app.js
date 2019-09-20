import React from 'react';

import Header from '../header';
import ClassPlayerInfo from '../class-player-info';
import ClassDetails from '../class-details';
import ItemList from '../item-list';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <ClassPlayerInfo />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <ClassDetails />
        </div>
      </div>
    </div>
  )
};

export default App;