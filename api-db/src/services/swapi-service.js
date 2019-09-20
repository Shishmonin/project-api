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
  getCardsByClass(hero) {
    return this.getResourse(`/classes/${hero}/`);
  }
  // Поиск карты по названию, не обязательно полному
  async getCardsByName(name) {
    const res = await this.getResourse(`/search/${name}/`);
    return res;
  }
  // Поиск карты по названию рассы Demon Dragon Mech Murloc Beast Pirate Totem
  async getCardsByRace(race) {
    const res = await this.getResourse(`/races/${race}/`);
    return res;
  }
};


// создаем потомка SwapiService
const swapi = new SwapiService();

swapi.getResourse('').then((allCards) => {
// Удаляю объеты без ссылок на озображения, объекты не явл существами
  let delCardImg = allCards.Classic.filter((obj) => {
    if(obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass !== 'Neutral') {
      return true;
    }
    return false;
  })
  // console.log(delCardImg);
  //// Создаю новый массив оставляя из старого массива только нужные св-ва
  let filtCards = [];
  delCardImg.forEach((obj) => {
    filtCards.push({cardId: obj.cardId,
                    cardSet: obj.cardSet,
                    name: obj.name,
                    playerClass: obj.playerClass,
                    img: obj.img})
  })
  console.log(filtCards);

  // Поиск по имени карт
  // Переманная с поисковой строкой
  let sear = 'Ar'
  // Фильтр с условием что значение name начинается с sear
  let matc = filtCards.filter((obj) => {
    let isSear = obj.name.startsWith(sear)
    if(isSear === true) {
      return true;
    }
    return false;
  })
  // console.log(...matc);
  matc.forEach((obj) => {
    console.log(obj.name)
  })
})


let sear = 'L'
swapi.getCardsByName(sear).then((allCards) => {
  let matc = allCards.filter((obj) => {
    let isSear = obj.name.startsWith(sear)
    if(isSear === true && obj.type !== 'Hero' && obj.img !== undefined && obj.playerClass !== 'Neutral' && obj.cardSet === 'Classic') {
      return true;
    }
    return false;
  })
  console.log(matc);
})

swapi.getCardsByClass("Rogue").then((allCards) => {
  console.log(allCards);
})

swapi.getCardsByRace("Beast").then((allCards) => {
  allCards.forEach((obj) => {
    console.log(obj.name)
  })
})