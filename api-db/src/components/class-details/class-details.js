import React , { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './class-details.css';

export default class ClassDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    // person: {name: 'efefefefe',
    //         img: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/NEW1_036.png"}
  };

  componentDidMount() {
    this.updatePerson();
  };
  // Метод обновления компонента с условием изменения входных параметров props
  componentDidUpdate(prevProps) {
    if(this.props.cardId !== prevProps.cardId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { cardId } = this.props;
    if(!cardId) {
      return;
    }
    this.swapiService
      .getCardsById(cardId)
      .then((person) => {
        console.log(person)
        this.setState({
          person,
          loading: false,
        });
      })
  }


  render() {

    if(!this.state.person) {
      return <span>Выберите карту из списка слева</span>
    }

    const hasData = (!this.state.loading || !this.state.person);
    const spinner = (!this.state.loading && !this.state.person) ? <Spinner/> : null;
    const content = hasData ? <ViewInfo person={this.state}/> : null;

    // const {img, cost, cardSet, name} = this.state.person;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const ViewInfo = ({person}) => {

  const {person: {img, cost, cardSet, name}} = person;

  return (
    <React.Fragment>
      <img className="person-image" alt = 'img'
          src = {img} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Набор: </span>
            <span>{cardSet}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Стоимость: </span>
            <span>{cost}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}