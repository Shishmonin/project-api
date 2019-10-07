import React from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';
import {WithData} from '../hoc-helpers';

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemListSelected, children: renderLabel, } = props;

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
};

ItemList.prototype = {
  data: PropTypes.arrayOf(PropTypes.object)
}

// const { getCardsMage } = new SwapiService();
const { clasCar } = new SwapiService();

export default WithData(ItemList, clasCar);
