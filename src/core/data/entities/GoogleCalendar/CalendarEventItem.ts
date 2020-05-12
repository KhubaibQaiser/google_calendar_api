export class CalendarEventItem {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: Date;
  updated: Date;
  summary: string;
  creator: Creator;
  organizer: Creator;
  start: HolidayDate;
  end: HolidayDate;
  transparency: string;
  visibility: string;
  iCalUID: string;
  sequence: number;

  constructor(
    kind: string,
    etag: string,
    id: string,
    status: string,
    htmlLink: string,
    created: Date,
    updated: Date,
    summary: string,
    creator: Creator,
    organizer: Creator,
    start: HolidayDate,
    end: HolidayDate,
    transparency: string,
    visibility: string,
    iCalUID: string,
    sequence: number,
  ) {
    this.kind = kind;
    this.etag = etag;
    this.id = id;
    this.status = status;
    this.htmlLink = htmlLink;
    this.created = created;
    this.updated = updated;
    this.summary = summary;
    this.creator = creator;
    this.organizer = organizer;
    this.start = start;
    this.end = end;
    this.transparency = transparency;
    this.visibility = visibility;
    this.iCalUID = iCalUID;
    this.sequence = sequence;
  }
}

class HolidayDate {
  date: string;

  constructor(date: string) {
    this.date = date;
  }
}

class Creator {
  email: string;
  displayName: string;
  self: boolean;

  constructor(email: string, displayName: string, self: boolean) {
    this.email = email;
    this.displayName = displayName;
    this.self = self;
  }
}
