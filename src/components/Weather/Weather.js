import React from 'react';
import { PropTypes } from 'prop-types';
import Card from '../Card/Card';

function Weather(props) {
  const { className } = props;
  return <Card className={className} />;
}

Weather.propTypes = {
  className: PropTypes.string.isRequired
};

export default Weather;
