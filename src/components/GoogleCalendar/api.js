import axios from 'axios';

const getCalendarList = async (apiKey, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  };
  const timeMin = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${apiKey}&timeMin=${timeMin}`;

  const response = await axios.get(url, { headers });
  console.log(response);
  return response;
};

export default getCalendarList;
