import React from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import StateReceiver from './StateReceiver';

function App() {
  const link = 'hello internet';
  return (
    <TestState>
      <StateReceiver />
      <div className="App">
        <h1>App goes here</h1>
        <a href={`https://google.com/search?q=${link}`}>Link to google</a>
      </div>
    </TestState>
  );
}

export default App;
