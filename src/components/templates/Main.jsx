import './Main.scss';
import React from 'react';
import Header from './header/Header';

export default (props) => (
  <>
    <Header {...props} />
    <main className="content">
      Conteudo
    </main>
  </>
);
