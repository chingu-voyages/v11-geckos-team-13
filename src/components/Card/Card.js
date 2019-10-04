import React from 'react';
import { PropTypes } from 'prop-types';
import './Card.css';

function Card(props) {
  const { children, className } = props;
  return <div className={`Card ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export default Card;
