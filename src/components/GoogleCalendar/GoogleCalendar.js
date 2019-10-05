import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Card from '../Card/Card';
import TodayEvents from './TodayEvents';

import { getToken, getCalendarList } from './api';

function GoogleCalendar(props) {
  const { className } = props;
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
    <Card className={className}>
      <button type="button" onClick={handleLoadCalendarClick}>
        Load calendar
      </button>
      {token !== '' && <TodayEvents events={events} />}
    </Card>
  );
}

GoogleCalendar.propTypes = {
  className: PropTypes.string.isRequired
};

export default GoogleCalendar;
