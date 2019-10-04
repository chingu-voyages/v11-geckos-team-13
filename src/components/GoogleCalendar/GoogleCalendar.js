import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import TodayEvents from './TodayEvents';

import { getToken, getCalendarList } from './api';

export default function GoogleCalendar() {
  const [token, setToken] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (token !== '') {
      getCalendarList(token).then(response => {
        setEvents(response.data.items);
      });
    }
  }, [token]);

  const handleLoadCalendarClick = async () => {
    setToken(await getToken());
  };

  return (
    <Card>
      <button type="button" onClick={handleLoadCalendarClick}>
        Load calendar
      </button>
      {token !== '' && <TodayEvents events={events} />}
    </Card>
  );
}
