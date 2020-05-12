import {GoogleCalendarRepository} from '../../data/repositories/GoogleCalendar/GoogleCalendarRepository';
import {GetPublicHolidays} from '../../../core/data/api/GoogleCalendarApi';
import {CalendarEventItem} from '../../../core/data/entities/GoogleCalendar/CalendarEventItem';

export default class GoogleCalendarRepositoryImpl
  implements GoogleCalendarRepository {
  async GetPublicHolidays(
    language: string,
    country: string,
    year?: number,
  ): Promise<CalendarEventItem[]> {
    const event = await GetPublicHolidays(language, country);
    let holidays = event.data.items;
    if (year !== undefined) {
      holidays = holidays.filter((item) => {
        const holidayYear = new Date(item.start.date).getFullYear();
        return holidayYear === year;
      });
    }
    return holidays.map(
      (item: CalendarEventItem) =>
        new CalendarEventItem(
          item.kind,
          item.etag,
          item.id,
          item.status,
          item.htmlLink,
          item.created,
          item.updated,
          item.summary,
          item.creator,
          item.organizer,
          item.start,
          item.end,
          item.transparency,
          item.visibility,
          item.iCalUID,
          item.sequence,
        ),
    );
  }
}
