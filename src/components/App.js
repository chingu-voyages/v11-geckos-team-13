/* jshint esversion: 6 */

import React from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import StateReceiver from './StateReceiver';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import Search from './Search/Search';
import Currency from './CurrencyConverter/Currency';
import Weather from './Weather/Weather';
import Timer from './Timer/Timer';
import TopSites from './TopSites/TopSites';
import './card.css';
import banner from '../app_banner.jpeg';

const WeatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const IpKey = process.env.REACT_APP_IP_KEY;

function App() {
  return (
    <div className="App">
      <img src={banner} alt="banner" className="App-banner" />
      <Weather IP_KEY={IpKey} API_KEY={WeatherKey} />
      <Search className="App-Search" />
      <div className="App-features-grid">
        <Currency />
        <TopSites />
        <Timer className="App-Pomodoro" />
        <GoogleCalendar className="App-GoogleCalendar" />
      </div>

      <div className="App-react-context">
        <TestState>
          <StateReceiver />
        </TestState>
      </div>
    </div>
  );
}

export default App;
