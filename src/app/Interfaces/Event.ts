import { EventCategory } from './EventCategory';

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  eventId: number;
  eventCategory: EventCategory;
}

export interface CreateEvent {
  name: string;
  description: string;
  date: string;
  location: string;
  eventId: number;
}
