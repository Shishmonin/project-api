import React , { Component } from 'react';

import './class-details.css';

export default class ClassDetails extends Component {

  render() {
    return (
      <div className="person-details card">
        <img className="person-image" alt = 'img'
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h4>Название карты</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Набор: </span>
              <span>classic</span>
            </li>
            <li className="list-group-item">
              <span className="term">Класс: </span>
              <span>Rogue</span>
            </li>
            <li className="list-group-item">
              <span className="term">Расса: </span>
              <span>dragon</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}