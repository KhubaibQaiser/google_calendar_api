import {GoogleCalendarRepository} from '../../../core/data/repositories/GoogleCalendar/GoogleCalendarRepository';
import {CalendarEventItem} from '../../../core/data/entities/GoogleCalendar/CalendarEventItem';
import GoogleCalendarRepositoryImpl from '../../../core/infrastructure/GoogleCalendar/GoogleCalendarRepositoryImpl';

export interface GoogleCalendarService {
  getPublicHolidays(
    language: string,
    country: string,
  ): Promise<CalendarEventItem[]>;
}

export class GoogleCalendarServiceImpl implements GoogleCalendarService {
  private calendarRepo: GoogleCalendarRepository;
  private static instance: GoogleCalendarServiceImpl;

  private constructor(calendarRepo: GoogleCalendarRepository) {
    this.calendarRepo = calendarRepo;
  }

  public static getInstance(): GoogleCalendarServiceImpl {
    if (!GoogleCalendarServiceImpl.instance) {
      GoogleCalendarServiceImpl.instance = new GoogleCalendarServiceImpl(
        new GoogleCalendarRepositoryImpl(),
      );
    }
    return GoogleCalendarServiceImpl.instance;
  }

  async getPublicHolidays(
    language: string,
    country: string,
    year?: number,
  ): Promise<CalendarEventItem[]> {
    let holidays = await this.calendarRepo.getPublicHolidays(
      language,
      country,
      year,
    );
    if (year !== undefined) {
      holidays = holidays.filter((holiday) => {
        const holidayYear = new Date(holiday.start.date).getFullYear();
        return holidayYear === year;
      });
    }
    holidays = holidays.sort((a, b) => {
      return (
        new Date(a.start.date).getMonth() - new Date(b.start.date).getMonth()
      );
    });
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
