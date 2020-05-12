import axios from 'axios';
import {
  REQUEST_TIMEOUT,
  GOOGLE_CALENDAR_BASE_URL,
  GOOGLE_CALENDAR_API_KEY,
} from 'react-native-dotenv';

export const googleCalendarAxios = axios.create({
  baseURL: GOOGLE_CALENDAR_BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

googleCalendarAxios.interceptors.request.use((request) => {
  request.params.key = GOOGLE_CALENDAR_API_KEY;
  return request;
});
