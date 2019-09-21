import React , { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service';

import './class-player-info.css';

export default class ClassPlayerInfo extends Component {

  swapiService = new SwapiService();

  state = {
    classHero: null,
    name: null,
    summary: null,
    img: null,
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.updateHero();
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateHero() {
    // Mage TU4a_006 Hunter HERO_05 Priest HERO_09
    const idHeros = ["HERO_05", "TU4a_006", "HERO_09"];
    // Рандомное значение из массива
    const idHero = idHeros[Math.floor(Math.random()*idHeros.length)];

    this.swapiService.getCardsByIdHero(idHero)
    .then((hero) => {
      let res = hero;
      if(res.name === 'Rexxar'){
        res.summary = 'Музыка укрощает даже самых диких зверей. Для ушей Рексара самая сладкая музыка — треск, с которым его свирепые спутники рвут на части добычу. Но он не так-то прост, как вы думаете! Рексар может даже самое слабое существо превратить в безжалостную машину для убийства. К тому же у него в запасе целый арсенал заклинаний прямого урона — приканчивать жертв, которым удалось уцелеть после нападения его зверей. Охота начинается!'
      }else if (res.name === 'Anduin Wrynn'){
        res.summary = 'Знаем, знаем, что вы думаете: подумаешь, мол, жрец! Что он мне сделает — залечит, что ли, до смерти?.. Действительно, в колоде Андуина есть мощные исцеляющие карты. Но заклинания темной магии у него такие, что вы быстро перестанете ухмыляться. К тому же у него имеются мощные заклинания вроде «Контроля разума», чтобы прикончить вас. Вашими же существами.'
      }else if (res.name === 'Jaina Proudmoore'){
        res.summary = 'Джайне нет равных в превращении маны в разные болезненные штуки. У нее в колоде множество заклинаний прямого урона — в частности, мощные зачистки стола «Чародейский взрыв» и «Волна огня», — и она на них, прямо скажем, не скупится. Прибавьте к этому силу героя, которая легко расправляется с мелкими существами, и множество разных секретов: перед вами гибкий и чрезвычайно опасный противник.'
      }
      this.setState({
        idHero,
        name: res.name,
        classHero: res.playerClass,
        summary: res.summary,
        img: res.img,
        loading: false,
      })
    })
    .catch(this.onError);
  }

  render() {

    const hasData = !(this.state.loading || this.state.error);

    const errorMessage = this.state.error ? <ErrorIndicator/> : null;
    const spinner = this.state.loading ? <Spinner/> : null;
    const content = hasData ? <ViewClassHero hero={this.state}/> : null;

    return (
      <div className="class-player jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>

    );
  }
}

// Компонент с данными о классе героя
// Возвращает React.Fragment котор позвол не создавать внешнюю обертку div
// которая может ломать верстку
const ViewClassHero = ({hero}) => {

  const { idHero, classHero, name, summary, img } = hero;

  return (
    <React.Fragment>
      <img className="class-image"
      src={img}
      alt="imghero" data-img = {idHero} />
      <div>
        <h4>Описание героя</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Класс:</span>
            <span> {classHero} </span>
          </li>
          <li className="list-group-item">
            <span className="term">Имя:</span>
            <span>{name}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Описание:</span>
            <p>{summary}</p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}