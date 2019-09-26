import axios from 'axios';
import pify from 'pify';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

export const isAppLoadedAsExtension = () => {
  return window.chrome && window.chrome.runtime && window.chrome.runtime.id;
};

export const getTokenFromExtension = async () => {
  const getAuthTokenPromisified = pify(window.chrome.identity.getAuthToken, {
    errorFirst: false // Needed for Chrome Extensions APIs
  });

  const token = await getAuthTokenPromisified({ interactive: true });
  return token;
};

export const getTokenFromWebApp = async () => {
  const gapiLoadPromisified = pify(window.gapi.load, {
    errorFirst: false // Needed for Chrome Extensions APIs
  });

  await gapiLoadPromisified('client:auth2');

  await window.gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    scope: SCOPES,
    discoveryDocs: DISCOVERY_DOCS
  });

  const GoogleAuth = window.gapi.auth2.getAuthInstance();

  if (!GoogleAuth.isSignedIn.get()) {
    await window.gapi.auth2.getAuthInstance().signIn();
  }

  return GoogleAuth.currentUser.get().getAuthResponse().access_token;
};

export const getToken = async () => {
  if (isAppLoadedAsExtension()) {
    const extensionToken = await getTokenFromExtension();
    return extensionToken;
  }

  const webAppToken = await getTokenFromWebApp();
  return webAppToken;
};

export const getCalendarList = async token => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
  };
  const timeMin = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}&timeMin=${timeMin}`;

  const response = await axios.get(url, { headers });
  return response;
};
