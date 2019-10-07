export default class SwapiService {
  // базовое постоянно повторяющееся выражение в запросе  в виже переменной
  _apiBase = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';

  async getResourse (url) {
    // const res = await fetch(`${this._apiBase}${url}`);
    const res = await fetch(`${this._apiBase}${url}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "79aaea72efmsh4692a6b6481d1a6p1acd44jsn411aad56b35e"
      }
    })

    if  (!res.ok) {
      throw new Error(`Fuckkkkkkk ${this._apiBase}${url} , receved ${res.status}`)
    };

    return await res.json();
  };


  // Поиск карт по классу персонажа
  async getCardsByClass(hero) {
    const res = await this.getResourse(`/classes/${hero}/`);
    return this._transformClass(res);
  }
  // Изменяем заранее массив получаемый по api для методов getCardsByName и getCardsByClass
  _transformClass(res) {
    let matc = res.filter((obj) => {
      if(obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass !== 'Neutral' && obj.cardSet === 'Classic') {
        return true;
      }
      return false;
    })
    let filtCards = [];
    matc.forEach((obj) => {
      filtCards.push({cardId: obj.cardId,
                      cardSet: obj.cardSet,
                      name: obj.name,
                      cost: obj.cost,
                      playerClass: obj.playerClass,
                      img: obj.img})
    })
    return filtCards;
  }




  // Поиск карт класс Hunter
  getCardsHunter = async () => {
    const res = await this.getResourse(`/classes/Hunter/`);
    return this._transformClassHunter(res);
  }
  // Изменяем заранее массив получаемый по api для методов getCardsHunter
  _transformClassHunter(res) {
    let matc = res.filter((obj) => {
      if(obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass === 'Hunter' && obj.cardSet === 'Classic') {
        return true;
      }
      return false;
    })
    let filtCards = [];
    matc.forEach((obj) => {
      filtCards.push({cardId: obj.cardId,
                      cardSet: obj.cardSet,
                      name: obj.name,
                      cost: obj.cost,
                      playerClass: obj.playerClass,
                      img: obj.img})
    })
    return filtCards;
  }


  // Поиск карт класс Mage
  getCardsMage = async () => {
    const res = await this.getResourse(`/classes/Mage/`);
    return this._transformClassMage(res);
  }
  // Изменяем заранее массив получаемый по api для методов getCardsMage
  _transformClassMage(res) {
    let matc = res.filter((obj) => {
      if(obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass === 'Mage' && obj.cardSet === 'Classic') {
        return true;
      }
      return false;
    })
    let filtCards = [];
    matc.forEach((obj) => {
      filtCards.push({cardId: obj.cardId,
                      cardSet: obj.cardSet,
                      name: obj.name,
                      cost: obj.cost,
                      playerClass: obj.playerClass,
                      img: obj.img})
    })
    return filtCards;
  }


  // Поиск карт класс Priest
  getCardsPriest = async () => {
    const res = await this.getResourse(`/classes/Priest/`);
    return this._transformClassPriest(res);
  }
  // Изменяем заранее массив получаемый по api для методов getCardsPriest
  _transformClassPriest(res) {
    let matc = res.filter((obj) => {
      if(obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass === 'Priest' && obj.cardSet === 'Classic') {
        return true;
      }
      return false;
    })
    let filtCards = [];
    matc.forEach((obj) => {
      filtCards.push({cardId: obj.cardId,
                      cardSet: obj.cardSet,
                      name: obj.name,
                      cost: obj.cost,
                      playerClass: obj.playerClass,
                      img: obj.img})
    })
    return filtCards;
  }





  // Поиск карты по названию, не обязательно полному
  async getCardsByName(name) {
    const res = await this.getResourse(`/search/${name}/`);
    return this._transformClass(res);
  }
  // Поиск карты по названию рассы Demon Dragon Mech Murloc Beast Pirate Totem
  async getCardsByRace(race) {
    const res = await this.getResourse(`/races/${race}/`);
    return res;
  }
  // Поиск карты героя
  async getCardsByIdHero(hero) {
    const res = await this.getResourse(`/${hero}/`);
    return this._transformHero(res);
  }
  // Изменяем заранее объект получаемый по api для метода getCardsByHero
  _transformHero(res) {
    // console.log(res[0])
    let re = res[0];
    return {
      idHero: null,
      name: re.name,
      playerClass: re.playerClass,
      summary: null,
      img: re.img,
    }
  }

    // Поиск карты героя
  async getCardsById(id) {
    const res = await this.getResourse(`/${id}/`);
    return this._transformId(res);
  }
  // Изменяем заранее объект получаемый по api для метода getCardsByHero
  _transformId(res) {
    // console.log(res[0])
    let re = res[0];
    return {
      cardId: re.cardId,
      name: re.name,
      cost: re.cost,
      cardSet: re.cardSet,
      img: re.img,
    }
  }
};


// создаем потомка SwapiService
const swapi = new SwapiService();

swapi.getCardsById("TU4a_006").then((hero) => {
  // console.log(hero);
})

swapi.getCardsByClass('Priest').then((hero) => {
  // console.log(hero);
})

// swapi.getCardsByName("NEW1_036").then((hero) => {
//   console.log(hero);
// })
// swapi.getResourse('').then((allCards) => {
// Удаляю объеты без ссылок на озображения, объекты не явл существами
  // let delCardImg = allCards.Classic.filter((obj) => {
  //   if(obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass !== 'Neutral') {
  //     return true;
  //   }
  //   return false;
  // })
  //// Создаю новый массив оставляя из старого массива только нужные св-ва
  // let filtCards = [];
  // delCardImg.forEach((obj) => {
  //   filtCards.push({cardId: obj.cardId,
  //                   cardSet: obj.cardSet,
  //                   name: obj.name,
  //                   playerClass: obj.playerClass,
  //                   img: obj.img})
  // })
  // console.log(filtCards);

  // Поиск по имени карт
  // Переманная с поисковой строкой
//   let sear = 'Ar'
//   // Фильтр с условием что значение name начинается с sear
//   let matc = filtCards.filter((obj) => {
//     let isSear = obj.name.startsWith(sear)
//     if(isSear === true) {
//       return true;
//     }
//     return false;
//   })
//   // console.log(...matc);
//   matc.forEach((obj) => {
//     console.log(obj.name)
//   })
// })


// let sear = 'L'
// swapi.getCardsByName(sear).then((allCards) => {
//   let matc = allCards.filter((obj) => {
//     let isSear = obj.name.startsWith(sear)
//     if(isSear === true && obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass !== 'Neutral' && obj.cardSet === 'Classic') {
//       return true;
//     }
//     return false;
//   })
//   console.log(matc);
// })

// swapi.getCardsByClass("Rogue").then((allCards) => {
//   console.log(allCards);
// })

// swapi.getCardsByRace("Beast").then((allCards) => {
//   allCards.forEach((obj) => {
//     console.log(obj.name)
//   })
// })