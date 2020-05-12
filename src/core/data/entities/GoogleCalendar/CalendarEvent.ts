import {CalendarEventItem} from './CalendarEventItem';

export class CalendarEvent {
  kind: string;
  etag: string;
  summary: string;
  updated: Date;
  timeZone: string;
  accessRole: string;
  defaultReminders: any[];
  nextSyncToken: string;
  items: CalendarEventItem[];

  constructor(
    kind: string,
    etag: string,
    summary: string,
    updated: Date,
    timeZone: string,
    accessRole: string,
    defaultReminders: any,
    nextSyncToken: string,
    items: CalendarEventItem[],
  ) {
    this.kind = kind;
    this.etag = etag;
    this.summary = summary;
    this.updated = updated;
    this.timeZone = timeZone;
    this.accessRole = accessRole;
    this.defaultReminders = defaultReminders;
    this.nextSyncToken = nextSyncToken;
    this.items = items;
  }
}
