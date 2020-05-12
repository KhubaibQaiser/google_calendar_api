import {CalendarEvent} from '../../entities/GoogleCalendar/CalendarEvent';

export interface GoogleCalendarRepository {
  GetPublicHolidays(language: string, country: string): Promise<CalendarEvent>;
}
