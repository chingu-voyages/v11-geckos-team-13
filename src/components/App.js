import React from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import StateReceiver from './StateReceiver';

function App() {
  const link = 'hello internet';
  return (
    <TestState>
      <StateReceiver />
      <div className="App">
        <h1>App goes here</h1>
        <a href={`https://google.com/search?q=${link}`}>Link to google</a>
        <GoogleCalendar />
      </div>
    </TestState>
  );
}

export default App;
