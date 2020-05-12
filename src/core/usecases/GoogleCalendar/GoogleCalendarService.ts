import {GoogleCalendarRepository} from 'src/core/data/repositories/GoogleCalendar/GoogleCalendarRepository';
import {CalendarEventItem} from 'src/core/data/entities/GoogleCalendar/CalendarEventItem';

export interface GoogleCalendarService {
  GetPublicHolidays(
    language: string,
    country: string,
  ): Promise<CalendarEventItem[]>;
}

export class GoogleCalendarServiceImpl implements GoogleCalendarService {
  calendarRepo: GoogleCalendarRepository;

  constructor(calendarRepo: GoogleCalendarRepository) {
    this.calendarRepo = calendarRepo;
  }

  async GetPublicHolidays(
    language: string,
    country: string,
    year?: number,
  ): Promise<CalendarEventItem[]> {
    return this.calendarRepo.GetPublicHolidays(language, country, year);
  }
}
