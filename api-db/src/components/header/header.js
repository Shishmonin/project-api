import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          HearthStone
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/hunter/">Hunter</Link>
        </li>
        <li>
          <Link to="/mage/">Mage</Link>
        </li>
        <li>
          <Link to="/priest/">Priest</Link>
        </li>
      </ul>
    </div>
  )
};

export default Header;