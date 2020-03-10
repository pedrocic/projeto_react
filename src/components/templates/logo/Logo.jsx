import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

export default () => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  </aside>
);
