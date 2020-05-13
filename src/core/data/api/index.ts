import axios from 'axios';
import {
  REQUEST_TIMEOUT,
  GOOGLE_CALENDAR_BASE_URL,
  GOOGLE_CALENDAR_API_KEY,
} from 'react-native-dotenv';

export const googleCalendarAxios = axios.create({
  baseURL: GOOGLE_CALENDAR_BASE_URL,
  timeout: parseInt(REQUEST_TIMEOUT, 10),
});

googleCalendarAxios.interceptors.request.use((request) => {
  if (request.params === undefined) {
    request.params = {};
  }
  request.params.key = GOOGLE_CALENDAR_API_KEY;
  console.log('request', request);
  return request;
});

googleCalendarAxios.interceptors.response.use((response) => {
  console.log('response', response);
  return response;
});
