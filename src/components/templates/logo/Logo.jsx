import React from 'react';
import './Logo.scss';
import logo from '../../../assets/img/logo.png';

export default () => (
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </aside>
);
