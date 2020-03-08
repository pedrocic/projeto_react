import './App.scss';
import React from 'react';

import Logo from '../components/templates/logo/Logo';
import Nav from '../components/templates/nav/Nav';
import Main from '../components/templates/Main';
import Footer from '../components/templates/footer/Footer';

export default () => (
  <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>
);
