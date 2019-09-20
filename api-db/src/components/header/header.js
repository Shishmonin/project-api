import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/">
          HearthStone
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#/Warrior">Warrior</a>
        </li>
        <li>
          <a href="#/Rogue">Rogue</a>
        </li>
        <li>
          <a href="#/Priest">Priest</a>
        </li>
      </ul>
    </div>
  )
};

export default Header;