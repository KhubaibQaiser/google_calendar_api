import {GoogleCalendarRepository} from '../../data/repositories/GoogleCalendar/GoogleCalendarRepository';
import {GetPublicHolidays} from '../../../core/data/api/GoogleCalendarApi';
import {CalendarEventItem} from '../../../core/data/entities/GoogleCalendar/CalendarEventItem';

export default class GoogleCalendarRemoteDataSource
  implements GoogleCalendarRepository {
  private static instance: GoogleCalendarRemoteDataSource;

  private constructor() {}

  public static getInstance(): GoogleCalendarRemoteDataSource {
    if (!GoogleCalendarRemoteDataSource.instance) {
      GoogleCalendarRemoteDataSource.instance = new GoogleCalendarRemoteDataSource();
    }
    return GoogleCalendarRemoteDataSource.instance;
  }

  async getPublicHolidays(
    language: string,
    country: string,
  ): Promise<CalendarEventItem[]> {
    const event = await GetPublicHolidays(language, country);
    return event.data.items;
  }
}
