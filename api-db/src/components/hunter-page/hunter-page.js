import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import ItemList from '../item-list/item-list';
import ClassDetails from '../class-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

import './hunter-page.css'



export default class HunterPage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedCard: null,
  };

  onCardSelected = (cardId) => {
    this.setState( {
      selectedCard: cardId,
    });
  };


  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList onItemListSelected={this.onCardSelected}
      getData={this.swapiService.getCardsMage}>

        {(item) => (
          `${item.name} (Стоимость по мане:${item.cost})`
        )}

      </ItemList>
    );

    const classDetails = (
      <ClassDetails cardId={this.state.selectedCard}/>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={classDetails}/>
      </ErrorBoundry>
    );
  }
}