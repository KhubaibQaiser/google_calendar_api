import {GoogleCalendarRepository} from '../../data/repositories/GoogleCalendar/GoogleCalendarRepository';
import {CalendarEventItem} from '../../../core/data/entities/GoogleCalendar/CalendarEventItem';
import GoogleCalendarRemoteDataSource from './GoogleCalendarRemoteDataSource';

export default class GoogleCalendarRepositoryImpl
  implements GoogleCalendarRepository {
  async getPublicHolidays(
    language: string,
    country: string,
  ): Promise<CalendarEventItem[]> {
    // TODO: Add error/promise rejection handling
    return GoogleCalendarRemoteDataSource.getInstance().getPublicHolidays(
      language,
      country,
    );
  }
}
