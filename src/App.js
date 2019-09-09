import React from 'react';
import './App.css';
import Currency from './Currency';

var CurrencyKey = process.env.REACT_APP_CURRENCY_API_KEY;
function App() {
  return (
    <div>
      <Currency API_KEY = {CurrencyKey}/>
    </div>
  );
}

export default App;
