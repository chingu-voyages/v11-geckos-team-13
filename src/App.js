import React from 'react';
import './App.css';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';

import { GOOGLE_CALENDAR_CLIENT_ID, GOOGLE_CALENDAR_API_KEY } from './config';

const googleCalendarClientID =
  process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID || GOOGLE_CALENDAR_CLIENT_ID;
const googleCalendarAPIKey =
  process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY || GOOGLE_CALENDAR_API_KEY;

function App() {
  return (
    <div className="App">
      <GoogleCalendar
        CLIENT_ID={googleCalendarClientID}
        API_KEY={googleCalendarAPIKey}
      />
    </div>
  );
}

export default App;
