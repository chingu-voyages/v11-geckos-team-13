import React, { useState, useEffect } from 'react';
import './App.css';
import TestState from '../context/test/TestState';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import StateReceiver from './StateReceiver';
import getCalendarList from './GoogleCalendar/api';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;

function App() {
  const [token, setToken] = useState('');

  const getTokenWebApp = () => {
    let GoogleAuth;
    window.gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
        ]
      })
      .then(() => {
        GoogleAuth = window.gapi.auth2.getAuthInstance();

        if (!GoogleAuth.isSignedIn.get()) {
          window.gapi.auth2
            .getAuthInstance()
            .signIn()
            .then(() => {
              const newToken = GoogleAuth.currentUser.get().getAuthResponse()
                .access_token;

              if (newToken !== undefined) {
                setToken(newToken);
              } else {
                console.log('Token is undefined');
              }
            });
        } else {
          const newToken = GoogleAuth.currentUser.get().getAuthResponse()
            .access_token;

          if (newToken !== undefined) {
            setToken(newToken);
          } else {
            console.log('Token is undefined');
          }
        }
      });
  };

  const getToken = () => {
    if (window.chrome && window.chrome.runtime && window.chrome.runtime.id) {
      window.chrome.identity.getAuthToken({ interactive: true }, function (
        extensionToken
      ) {
        setToken(extensionToken);
      });
    } else {
      window.gapi.load('client:auth2', getTokenWebApp);
    }
  };

  useEffect(() => {
    if (token !== '') {
      console.log(token);
      getCalendarList(API_KEY, token);
    }
  }, [token]);

  const link = 'hello internet';
  return (
    <TestState>
      <StateReceiver />
      <div className="App">
        <h1>App goes here</h1>
        <a href={`https://google.com/search?q=${link}`}>Link to google</a>
        <button
          onClick={async () => {
            getToken();
          }}
        >
          Load calendar
        </button>
      </div>
    </TestState>
  );
}

export default App;
