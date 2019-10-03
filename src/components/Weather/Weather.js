/* jshint esversion: 6 */

import React, { Component } from 'react';
import '../card.css';
import PropTypes from 'prop-types';
import ClearDay from './icons/clear-day.svg';
import ClearNight from './icons/clear-night.svg';
import Cloud from './icons/cloud.svg';
import Fog from './icons/fog.svg';
import PartlyCloudyDay from './icons/partly-cloudy-day.svg';
import PartlyCloudyNight from './icons/partly-cloudy-night.svg';
import Rain from './icons/rain.svg';
import SnowSleet from './icons/snow-sleet.svg';
import Wind from './icons/wind.svg';

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
                if (result[i].icon === 'clear-day') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Clear day icon"
                        src={ClearDay}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'clear-night') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Clear night icon"
                        src={ClearNight}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'cloud') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Cloud icon"
                        src={Cloud}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'fog') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img height="150" width="150" alt="Fog icon" src={Fog} />
                    </div>
                  );
                }
                if (result[i].icon === 'partly-cloudy-day') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Partly cloudy day icon"
                        src={PartlyCloudyDay}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'partly-cloudy-night') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Partly cloudy night icon"
                        src={PartlyCloudyNight}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'rain') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Rain icon"
                        src={Rain}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'wind') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Wind icon"
                        src={Wind}
                      />
                    </div>
                  );
                }

                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Snow icon"
                      src={SnowSleet}
                    />
                  </div>
                );
              }
              if (!defaultTemperature && defaultWindSpeed) {
                if (result[i].icon === 'clear-day') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Clear day icon"
                        src={ClearDay}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'clear-night') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Clear night icon"
                        src={ClearNight}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'cloud') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Cloud icon"
                        src={Cloud}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'fog') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <img height="150" width="150" alt="Fog icon" src={Fog} />
                    </div>
                  );
                }
                if (result[i].icon === 'partly-cloudy-day') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Partly cloudy day icon"
                        src={PartlyCloudyDay}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'partly-cloudy-night') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Partly cloudy night icon"
                        src={PartlyCloudyNight}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'rain') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Rain icon"
                        src={Rain}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'wind') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>
                        tempreature:{' '}
                        {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                      </h3>
                      <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                      <img
                        height="150"
                        width="150"
                        alt="Wind icon"
                        src={Wind}
                      />
                    </div>
                  );
                }

                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Snow icon"
                      src={SnowSleet}
                    />
                  </div>
                );
              }
              if (defaultTemperature && !defaultWindSpeed) {
                if (result[i].icon === 'clear-day') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img
                        height="150"
                        width="150"
                        alt="Clear day icon"
                        src={ClearDay}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'clear-night') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img
                        height="150"
                        width="150"
                        alt="Clear night icon"
                        src={ClearNight}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'cloud') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img
                        height="150"
                        width="150"
                        alt="Cloud icon"
                        src={Cloud}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'fog') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img height="150" width="150" alt="Fog icon" src={Fog} />
                    </div>
                  );
                }
                if (result[i].icon === 'partly-cloudy-day') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img
                        height="150"
                        width="150"
                        alt="Partly cloudy day icon"
                        src={PartlyCloudyDay}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'partly-cloudy-night') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img
                        height="150"
                        width="150"
                        alt="Partly cloudy night icon"
                        src={PartlyCloudyNight}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'rain') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img
                        height="150"
                        width="150"
                        alt="Rain icon"
                        src={Rain}
                      />
                    </div>
                  );
                }
                if (result[i].icon === 'wind') {
                  return (
                    <div key={result[i].time} className="card container">
                      <h3>Weather now</h3>
                      <h3>icon: {result[i].icon}</h3>
                      <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                      <h3>
                        wind speed: {(result[i].windSpeed * 3.6).toFixed(2)}{' '}
                        km/h
                      </h3>
                      <img
                        height="150"
                        width="150"
                        alt="Wind icon"
                        src={Wind}
                      />
                    </div>
                  );
                }

                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Snow icon"
                      src={SnowSleet}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'clear-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear day icon"
                      src={ClearDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'clear-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear night icon"
                      src={ClearNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'cloud') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Cloud icon"
                      src={Cloud}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'fog') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img height="150" width="150" alt="Fog icon" src={Fog} />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy day icon"
                      src={PartlyCloudyDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy night icon"
                      src={PartlyCloudyNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'rain') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img height="150" width="150" alt="Rain icon" src={Rain} />
                  </div>
                );
              }
              if (result[i].icon === 'wind') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>Weather now</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img height="150" width="150" alt="Wind icon" src={Wind} />
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
                  <img
                    height="150"
                    width="150"
                    alt="Snow icon"
                    src={SnowSleet}
                  />
                </div>
              );
            }
            if (defaultTemperature && defaultWindSpeed) {
              if (result[i].icon === 'clear-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear day icon"
                      src={ClearDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'clear-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear night icon"
                      src={ClearNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'cloud') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Cloud icon"
                      src={Cloud}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'fog') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img height="150" width="150" alt="Fog icon" src={Fog} />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy day icon"
                      src={PartlyCloudyDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy night icon"
                      src={PartlyCloudyNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'rain') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img height="150" width="150" alt="Rain icon" src={Rain} />
                  </div>
                );
              }
              if (result[i].icon === 'wind') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img height="150" width="150" alt="Wind icon" src={Wind} />
                  </div>
                );
              }

              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                  <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                  <img
                    height="150"
                    width="150"
                    alt="Snow icon"
                    src={SnowSleet}
                  />
                </div>
              );
            }
            if (!defaultTemperature && defaultWindSpeed) {
              if (result[i].icon === 'clear-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear day icon"
                      src={ClearDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'clear-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear night icon"
                      src={ClearNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'cloud') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Cloud icon"
                      src={Cloud}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'fog') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <img height="150" width="150" alt="Fog icon" src={Fog} />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy day icon"
                      src={PartlyCloudyDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy night icon"
                      src={PartlyCloudyNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'rain') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img height="150" width="150" alt="Rain icon" src={Rain} />
                  </div>
                );
              }
              if (result[i].icon === 'wind') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>
                      tempreature:{' '}
                      {(result[i].temperature * 1.8 + 32).toFixed(2)} F
                    </h3>
                    <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                    <img height="150" width="150" alt="Wind icon" src={Wind} />
                  </div>
                );
              }

              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>wind speed: {result[i].windSpeed.toFixed(2)} m/s</h3>
                  <img
                    height="150"
                    width="150"
                    alt="Snow icon"
                    src={SnowSleet}
                  />
                </div>
              );
            }
            if (defaultTemperature && !defaultWindSpeed) {
              if (result[i].icon === 'clear-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear day icon"
                      src={ClearDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'clear-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Clear night icon"
                      src={ClearNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'cloud') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Cloud icon"
                      src={Cloud}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'fog') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img height="150" width="150" alt="Fog icon" src={Fog} />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-day') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy day icon"
                      src={PartlyCloudyDay}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'partly-cloudy-night') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img
                      height="150"
                      width="150"
                      alt="Partly cloudy night icon"
                      src={PartlyCloudyNight}
                    />
                  </div>
                );
              }
              if (result[i].icon === 'rain') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img height="150" width="150" alt="Rain icon" src={Rain} />
                  </div>
                );
              }
              if (result[i].icon === 'wind') {
                return (
                  <div key={result[i].time} className="card container">
                    <h3>After {i * 3} hours</h3>
                    <h3>icon: {result[i].icon}</h3>
                    <h3>tempreature: {result[i].temperature.toFixed(2)} C</h3>
                    <h3>
                      wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                    </h3>
                    <img height="150" width="150" alt="Wind icon" src={Wind} />
                  </div>
                );
              }

              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img
                    height="150"
                    width="150"
                    alt="Snow icon"
                    src={SnowSleet}
                  />
                </div>
              );
            }
            if (result[i].icon === 'clear-day') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img
                    height="150"
                    width="150"
                    alt="Clear day icon"
                    src={ClearDay}
                  />
                </div>
              );
            }
            if (result[i].icon === 'clear-night') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img
                    height="150"
                    width="150"
                    alt="Clear night icon"
                    src={ClearNight}
                  />
                </div>
              );
            }
            if (result[i].icon === 'cloud') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img height="150" width="150" alt="Cloud icon" src={Cloud} />
                </div>
              );
            }
            if (result[i].icon === 'fog') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img height="150" width="150" alt="Fog icon" src={Fog} />
                </div>
              );
            }
            if (result[i].icon === 'partly-cloudy-day') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img
                    height="150"
                    width="150"
                    alt="Partly cloudy day icon"
                    src={PartlyCloudyDay}
                  />
                </div>
              );
            }
            if (result[i].icon === 'partly-cloudy-night') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img
                    height="150"
                    width="150"
                    alt="Partly cloudy night icon"
                    src={PartlyCloudyNight}
                  />
                </div>
              );
            }
            if (result[i].icon === 'rain') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img height="150" width="150" alt="Rain icon" src={Rain} />
                </div>
              );
            }
            if (result[i].icon === 'wind') {
              return (
                <div key={result[i].time} className="card container">
                  <h3>After {i * 3} hours</h3>
                  <h3>icon: {result[i].icon}</h3>
                  <h3>
                    tempreature: {(result[i].temperature * 1.8 + 32).toFixed(2)}{' '}
                    F
                  </h3>
                  <h3>
                    wind speed: {(result[i].windSpeed * 3.6).toFixed(2)} km/h
                  </h3>
                  <img height="150" width="150" alt="Wind icon" src={Wind} />
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
                <img height="150" width="150" alt="Snow icon" src={SnowSleet} />
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
