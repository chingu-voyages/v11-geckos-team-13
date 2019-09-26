import React, { useState, useEffect } from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import StateReceiver from './StateReceiver';
import {
  getCalendarList,
  getTokenFromExtension,
  isAppLoadedAsExtension,
  getTokenFromWebApp
} from './GoogleCalendar/api';

function App() {
  const [token, setToken] = useState('');

  const getToken = async () => {
    if (isAppLoadedAsExtension()) {
      const extensionToken = await getTokenFromExtension();
      setToken(extensionToken);
    } else {
      const webAppToken = await getTokenFromWebApp();
      setToken(webAppToken);
    }
  };

  useEffect(() => {
    if (token !== '') {
      console.log(`New token: ${token}`);
      getCalendarList(token);
    }
  }, [token]);

  const link = 'hello internet';
  return (
    <TestState>
      <StateReceiver />
      <div className="App">
        <h1>App goes here</h1>
        <a href={`https://google.com/search?q=${link}`}>Link to google</a>
        <button onClick={getToken}>Load calendar</button>
      </div>
    </TestState>
  );
}

export default App;
