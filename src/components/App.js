import React from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import StateReceiver from './StateReceiver';
import Search from './Search/Search';
import CurrencyConverter from './CurrencyConverter/Currency';
import './CurrencyConverter/card.css';

const CurrencyKey = process.env.REACT_APP_CURRENCY_API_KEY;

function App() {

  const link = 'hello internet';
  return (
    <div>

      <h1 className="header">Extension</h1>
      <div className="card">
        <TestState>
          <StateReceiver />
          <Search />
          <div className="App">
            <h1>App goes here</h1>
            <a href={`https://google.com/search?q=${link}`}>Link to google</a>
          </div>
        </TestState>
      </div>
      <CurrencyConverter API_KEY={CurrencyKey} />
    </div>
  );
}

export default App;
