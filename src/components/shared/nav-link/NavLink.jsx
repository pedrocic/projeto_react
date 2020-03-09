import React from 'react';
import PropTypes from 'prop-types';

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
    <a href={href}>
      <i className={icon} />
      {' '}
      {title}
    </a>
  );
}
