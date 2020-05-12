import {googleCalendarAxios} from './';
import {CalendarEvent} from '../entities/GoogleCalendar/CalendarEvent';

export const GetPublicHolidays = (
  language: string,
  country: string,
): Promise<CalendarEvent> => {
  return googleCalendarAxios.get(
    `calendars/${language}.${country}%23holiday%40group.v.calendar.google.com/events`,
  );
};
