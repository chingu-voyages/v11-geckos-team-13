import React from 'react';
import { PropTypes } from 'prop-types';
import './Card.css';

function Card(props) {
  const { children } = props;
  return <div className="Card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
