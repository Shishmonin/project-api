import React , { Component } from 'react';

import './class-player-info.css';

export default class ClassPlayerInfo extends Component {

  render() {
    return (
      <div className="class-player jumbotron rounded">
      <img className="class-image"
          src='https://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_572.png'
          alt="imghero" />
        <div>
          <h4>Описание героя</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Класс</span>
              {/* <span> {population} </span> */}
            </li>
            <li className="list-group-item">
              <span className="term">Имя</span>
              {/* <span>{rotationPeriod}</span> */}
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              {/* <span className="term">Музыка укрощает даже самых диких зверей. Для ушей Рексара самая сладкая музыка — треск, с которым его свирепые спутники рвут на части добычу. Но он не так-то прост, как вы думаете! Рексар может даже самое слабое существо превратить в безжалостную машину для убийства. К тому же у него в запасе целый арсенал заклинаний прямого урона — приканчивать жертв, которым удалось уцелеть после нападения его зверей. Охота начинается!</span> */}
              {/* <span>{diameter}</span> */}
            </li>
          </ul>
        </div>
      </div>

    );
  }
}