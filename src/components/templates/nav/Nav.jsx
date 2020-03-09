import React from 'react';
import Navlink from '../../shared/nav-link/NavLink';
import './Nav.scss';

export default () => (
  <aside className="menu-area">
    <nav className="menu">
      <Navlink href="#" icon="fa fa-home" title="Home" />
      <Navlink href="#/users" icon="fa fa-users" title="Usuários" />
    </nav>
  </aside>
);
