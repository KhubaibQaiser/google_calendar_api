import {GoogleCalendarRepository} from 'src/core/data/repositories/GoogleCalendar/GoogleCalendarRepository';
import {CalendarEvent} from 'src/core/data/entities/GoogleCalendar/CalendarEvent';
import {GetPublicHolidays} from 'src/core/data/api/GoogleCalendarApi';

export class GoogleCalendarRepositoryImpl implements GoogleCalendarRepository {
  async GetPublicHolidays(
    language: string,
    country: string,
  ): Promise<CalendarEvent> {
    const event = await GetPublicHolidays(language, country);
    // const jsonData = await res.json();
    // return jsonData.map(
    //   (event: CalendarEvent) =>
    //     new CalendarEvent(
    //       event.kind,
    //       event.etag,
    //       event.summary,
    //       event.updated,
    //       event.timeZone,
    //       event.accessRole,
    //       event.defaultReminders,
    //       event.nextSyncToken,
    //       event.items,
    //     ),
    // );
    return new CalendarEvent(
      event.kind,
      event.etag,
      event.summary,
      event.updated,
      event.timeZone,
      event.accessRole,
      event.defaultReminders,
      event.nextSyncToken,
      event.items,
    );
  }
}
