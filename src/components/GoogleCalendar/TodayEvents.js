import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './TodayEvents.css';

function TodayEvents(props) {
  const { events } = props;
  return (
    <div className="TodayEvents-container">
      {events.length !== 0 &&
        events.map(event => (
          <Card className="card-event" key={event.id}>
            <div>{event.summary}</div>
            <div>{event.description}</div>
            {event.start.dateTime && (
              <div>
                <div>
                  Start: {event.start.dateTime} {event.start.timeZone}
                </div>
                <div>
                  End: {event.end.dateTime} {event.end.timeZone}
                </div>
              </div>
            )}
            {event.start.date && <div>Date: {event.start.date}</div>}
            <br />
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
