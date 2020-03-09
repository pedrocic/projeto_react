import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

export default function SFC({ icon, title, subtitle }) {
  SFC.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };
  SFC.defaultProps = {
    icon: 'home',
    subtitle: '',
  };
  return (
    <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
        <i className={`fa fa-${icon}`} />
        {title}
      </h1>
      <p className="lead text-muted">
        {subtitle}
      </p>
    </header>
  );
}
