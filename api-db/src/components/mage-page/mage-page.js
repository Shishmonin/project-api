import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import ItemList from '../item-list/item-list';
import ClassDetails from '../class-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service';

import './mage-page.css'



export default class MagePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedCard: null,
    clasCar: this.swapiService.getCardsMage,
  };

  onCardSelected = (cardId) => {
    this.props.history.push(cardId)
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
      getData={this.state.clasCar}>

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