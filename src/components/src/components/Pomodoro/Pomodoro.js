import React from 'react';
import { PropTypes } from 'prop-types';
import Card from '../Card/Card';

function Pomodoro(props) {
  const { className } = props;
  return <Card className={className} />;
}

Pomodoro.propTypes = {
  className: PropTypes.string.isRequired
};

export default Pomodoro;
