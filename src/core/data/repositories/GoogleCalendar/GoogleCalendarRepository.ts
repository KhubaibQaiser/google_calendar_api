import {CalendarEventItem} from '../../entities/GoogleCalendar/CalendarEventItem';

export interface GoogleCalendarRepository {
  getPublicHolidays(
    language: string,
    country: string,
    year?: number,
  ): Promise<CalendarEventItem[]>;
}
