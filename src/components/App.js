/* jshint esversion: 6 */

import React from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import StateReceiver from './StateReceiver';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import Search from './Search/Search';
import CurrencyConverter from './CurrencyConverter/Currency';
import Weather from './Weather/Weather';
import './card.css';
import banner from '../app_banner.jpeg';

const CurrencyKey = process.env.REACT_APP_CURRENCY_API_KEY;
const WeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const IpKey = process.env.REACT_APP_IP_KEY;

function App() {
  return (
    <div>
      <img src={banner} alt="banner" className="App-banner" />
      <Search className="App-Search" />
      <div className="App">
        <GoogleCalendar />
      </div>
      <div className="App-react-context">
        <TestState>
          <StateReceiver />
        </TestState>
      </div>
      <CurrencyConverter API_KEY={CurrencyKey} />
      <Weather IP_KEY={IpKey} API_KEY={WeatherKey} />
    </div>
  );
}

export default App;
