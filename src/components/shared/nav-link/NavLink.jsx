import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function navLink({ href, icon, title }) {
  navLink.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  navLink.defaultProps = {
    href: '#',
  };
  return (
    <Link to={href}>
      <i className={icon} />
      {' '}
      {title}
    </Link>
  );
}
