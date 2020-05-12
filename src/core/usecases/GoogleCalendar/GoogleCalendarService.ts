import {CalendarEvent} from 'src/core/data/entities/GoogleCalendar/CalendarEvent';
import {GoogleCalendarRepository} from 'src/core/data/repositories/GoogleCalendar/GoogleCalendarRepository';

export interface GoogleCalendarService {
  GetPublicHolidays(language: string, country: string): Promise<CalendarEvent>;
}

export class GoogleCalendarServiceImpl implements GoogleCalendarService {
  calendarRepo: GoogleCalendarRepository;

  constructor(calendarRepo: GoogleCalendarRepository) {
    this.calendarRepo = calendarRepo;
  }

  async GetPublicHolidays(
    language: string,
    country: string,
  ): Promise<CalendarEvent> {
    return this.calendarRepo.GetPublicHolidays(language, country);
  }
}
