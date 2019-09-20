import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Изера
        </li>
        <li className="list-group-item">
          Алекстраза
        </li>
        <li className="list-group-item">
          Смертокрыл
        </li>
      </ul>
    );
  }
}