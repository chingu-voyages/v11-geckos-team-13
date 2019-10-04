/* jshint esversion: 6 */

import React from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import StateReceiver from './StateReceiver';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import Search from './Search/Search';
import CurrencyConverter from './CurrencyConverter/Currency';
import Weather from './Weather/Weather';
import WeatherMultiple from './Weather/WeatherMultiple';
import Pomodoro from './Pomodoro/Pomodoro';
import './card.css';
import banner from '../app_banner.jpeg';

const CurrencyKey = process.env.REACT_APP_CURRENCY_API_KEY;
const WeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const IpKey = process.env.REACT_APP_IP_KEY;

function App() {
  return (
    <div className="App">
      <img src={banner} alt="banner" className="App-banner" />
      <Weather className="App-Weather" />
      <Search className="App-Search" />
      <div className="App-features-grid">
        <CurrencyConverter API_KEY={CurrencyKey} />
        <Pomodoro />
        <GoogleCalendar />
      </div>

      <WeatherMultiple IP_KEY={IpKey} API_KEY={WeatherKey} />
      <div className="App-react-context">
        <TestState>
          <StateReceiver />
        </TestState>
      </div>
    </div>
  );
}

export default App;
