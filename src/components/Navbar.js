import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
