import React, { useState, useEffect } from 'react';
import TodayEvents from './TodayEvents';

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export default function GoogleCalendar(props) {
  const { CLIENT_ID, API_KEY } = props;

  const [events, setEvents] = useState([]);
  const [isUserSignedIn, setUserSignedIn] = useState(false);

  const loadEvents = () => {
    window.gapi.client.calendar.events
      .list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime'
      })
      .then(response => {
        setEvents(response.result.items);
      });
  };

  useEffect(() => {
    const initClient = () => {
      window.gapi.client
        .init({
          api_key: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        })
        .then(() => {
          setUserSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    };

    const handleClientLoad = () => {
      window.gapi.load('client:auth2', initClient);
    };

    handleClientLoad();
  }, [API_KEY, CLIENT_ID]);

  useEffect(() => {
    if (isUserSignedIn) {
      loadEvents();
    }
  }, [isUserSignedIn]);

  const handleAuthClick = () => {
    window.gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        setUserSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      });
  };

  const handleSignoutClick = () => {
    window.gapi.auth2
      .getAuthInstance()
      .signOut()
      .then(() => {
        setUserSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      });
  };

  return (
    <div>
      <button type="button" onClick={handleAuthClick}>
        Authorize
      </button>
      <button type="button" onClick={handleSignoutClick}>
        Sign Out
      </button>
      {isUserSignedIn ? (
        <TodayEvents events={events} />
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
}
