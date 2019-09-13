import React from 'react';
import './TodayEvents.css';

export default function TodayEvents(props) {
  const { events } = props;
  return (
    <div className="TodayEvents-container">
      {events.length !== 0 &&
        events.map(event => (
          <div key={event.id}>
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
          </div>
        ))}
    </div>
  );
}
