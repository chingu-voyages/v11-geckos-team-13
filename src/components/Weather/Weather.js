/* jshint esversion: 6 */

import React, { Component } from 'react';
import '../card.css';
import PropTypes from 'prop-types';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      defaultTemperature: true,
      defaultWindSpeed: true,
      result: []
    };
  }

  componentDidMount() {
    const { API_KEY } = this.props;

    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${position.coords.latitude},${position.coords.longitude}?units=si`
      )
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          return myJson.hourly.data;
        })
        .then(res => {
          this.setState({ result: res });
        });
    });
  }

  updateTemp = event => {
    if (event.target.value === 'C') {
      this.setState({ defaultTemperature: true });
    } else {
      this.setState({ defaultTemperature: false });
    }
  };

  updateWind = event => {
    if (event.target.value === 'm/s') {
      this.setState({ defaultWindSpeed: true });
    } else {
      this.setState({ defaultWindSpeed: false });
    }
  };

  render() {
    const { defaultTemperature, defaultWindSpeed, result } = this.state;

    return (
      <div>
        <select className="list" onChange={this.updateTemp}>
          <option value="C">C</option>
          <option value="F">F</option>
        </select>

        <select className="list" onChange={this.updateWind}>
          <option value="m/s">m/s</option>
          <option value="km/h">km/h</option>
        </select>

        {result
          .filter((user, i) => i % 3 === 0)
          .map((user, i) => {
            if (i === 0) {
              if (defaultTemperature && defaultWindSpeed) {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>

                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                  </div>
                );
              }
              if (!defaultTemperature && defaultWindSpeed) {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                  </div>
                );
              }
              if (defaultTemperature && !defaultWindSpeed) {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                  </div>
                );
              }
              return (
                <div key={result[i].time} className="card container">
                  <h3>Weather now</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                </div>
              );
            }
            if (defaultTemperature && defaultWindSpeed) {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>

                  <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                  <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                </div>
              );
            }
            if (!defaultTemperature && defaultWindSpeed) {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                </div>
              );
            }
            if (defaultTemperature && !defaultWindSpeed) {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                </div>
              );
            }
            return (
              <div key={result[i].time} className="card container">
                <h3>After {i * 3} hours</h3>
                <h3>icon: {result[i].icon}</h3>
                <h3>
                  tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                </h3>
                <h3>
                  wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                </h3>
              </div>
            );
          })}
      </div>
    );
  }
}

Weather.propTypes = {
  API_KEY: PropTypes.string.isRequired
};

export default Weather;
