import {CalendarEventItem} from '../../entities/GoogleCalendar/CalendarEventItem';

export interface GoogleCalendarRepository {
  GetPublicHolidays(
    language: string,
    country: string,
    year?: number,
  ): Promise<CalendarEventItem[]>;
}
