import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
  { name: 'start', path: '/', exact: true, },
  { name: 'products', path: '/products' },
  { name: 'contact', path: '/contact' },
  { name: 'admin panel', path: '/admin' },
]

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        {list.map(nav => (
          <li key={nav.name}>
            <NavLink
              exact={nav.exact ? nav.exact : false}
              to={nav.path}
            >{nav.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;