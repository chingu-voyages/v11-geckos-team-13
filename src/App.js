import React , { Component } from 'react';
import './App.css';
import Currency from './Currency';

const CurrencyKey = process.env.REACT_APP_CURRENCY_API_KEY;


function App() {
  return (
    <div className = "appDiv">
      <h1>Extension</h1>
      <Currency API_KEY = {CurrencyKey}/>
    </div>
  );
}

export default App;
