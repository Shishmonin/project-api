import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
// import Spinner from '../spinner';
import {WithData} from '../hoc-helpers';

import './item-list.css';

const ItemList = (props) => {

    const { data, onItemListSelected, children: renderLabel } = props;

    const items = data.map((item) => {
      const { cardId } = item;
      const label = renderLabel(item);

      return (
        <li className="list-group-item"
            key={cardId}
            onClick={() => onItemListSelected(cardId)}>
          <p>{label}</p>
        </li>
      );
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }

// Обертка отвечает за логику и работаес входящим компонентои и вход props
// const WithData = (View, getData) => {

//   return class extends Component {

//     state = {
//       data: null,
//     };

//     componentDidMount() {
//       // Передан массив с карточками
//       // const { getData } = this.props;
//       console.log(getData);
//       // Массив положили в  state
//       getData()
//           .then((data) => {
//             this.setState({
//               data
//             });
//           });
//     }

//     render () {

//       const { data } = this.state;

//       if(!data) {
//         return <Spinner />
//       };

//       return <View {...this.props} data={data} />
//     }
//   }
// };

const { getCardsHunter } = new SwapiService();

export default WithData(ItemList, getCardsHunter);
