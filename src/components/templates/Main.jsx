import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import './Main.scss';

export default function main(props) {
  const { children } = props;
  main.propTypes = {
    children: PropTypes.string.isRequired,
  };
  return (
    <>
      <Header {...props} />
      <main className="content container-fluid">
        <div className="p-3 mt-3">
          {children}
        </div>
      </main>
    </>
  );
}
