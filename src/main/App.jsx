import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';


import Logo from '../components/templates/logo/Logo';
import Nav from '../components/templates/nav/Nav';
import Main from '../components/templates/Main';
import Footer from '../components/templates/footer/Footer';

export default () => (
  <div className="app">
    <Logo />
    <Nav />
    <Main
      icon="home"
      title="Início"
      subtitle="Segundo Projeto do capítulo de Reactj."
    />
    <Footer />
  </div>
);
