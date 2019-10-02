import React from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import StateReceiver from './StateReceiver';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import Search from './Search/Search';
import CurrencyConverter from './CurrencyConverter/Currency';
import Weather from './Weather/Weather';
import './card.css';

const CurrencyKey = process.env.REACT_APP_CURRENCY_API_KEY;
const WeatherKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const link = 'hello internet';
  return (
    <div>
      <TestState>
        <StateReceiver />
        <Search />
        <div className="App">
          <h1>App goes here</h1>
          <a href={`https://google.com/search?q=${link}`}>Link to google</a>
          <GoogleCalendar />
        </div>
      </TestState>
      <CurrencyConverter API_KEY={CurrencyKey} />
      <Weather API_KEY={WeatherKey} />
    </div>
  );
}

export default App;
