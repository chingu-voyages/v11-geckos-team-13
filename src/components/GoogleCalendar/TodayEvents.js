import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './TodayEvents.css';

const formatEventDate = event => {
  if (event.start.dateTime !== undefined) {
    const startDate = new Date(event.start.dateTime);
    const endDate = new Date(event.end.dateTime);
    return `From ${startDate.getHours()}:${startDate
      .getMinutes()
      .toString()
      .padStart(2, '0')} to ${endDate.getHours()}:${endDate
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }
  if (event.start.date !== undefined) {
    return 'All day';
  }

  return 'No time information available';
};

function TodayEvents(props) {
  const { events } = props;
  return (
    <div className="TodayEvents-container">
      {events.length !== 0 &&
        events.map(event => (
          <Card className="card-event" key={event.id}>
            <div className="card-event-date">{formatEventDate(event)}</div>
            <div className="card-event-summary">{event.summary}</div>
            <div>{event.description}</div>
          </Card>
        ))}
    </div>
  );
}

TodayEvents.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      description: PropTypes.string,
      start: PropTypes.shape.isRequired,
      end: PropTypes.shape.isRequired
    })
  ).isRequired
};

export default TodayEvents;
