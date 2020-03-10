import React from 'react';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';

import Routes from './Routes';

import Logo from '../components/templates/logo/Logo';
import Nav from '../components/templates/nav/Nav';
import Footer from '../components/templates/footer/Footer';

export default function app() {
  return (
    <HashRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}
