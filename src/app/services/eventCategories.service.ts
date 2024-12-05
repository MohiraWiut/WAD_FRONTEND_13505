import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  CreateEventCategory,
  EventCategory,
} from '../Interfaces/EventCategory';

@Injectable({
  providedIn: 'root',
})
export class EventCategoriesService {
  private apiurl = 'https://localhost:7163/api';
  constructor(private http: HttpClient) {}

  getItems(): Observable<EventCategory[]> {
    return this.http.get<EventCategory[]>(this.apiurl + '/EventCategories');
  }

  getEventCategories(id: number) {
    return this.http.get<EventCategory>(`${this.apiurl}/EventCategories/${id}`);
  }

  deleteEventCategories(id: number) {
    return this.http.delete(`${this.apiurl}/EventCategories/${id}`);
  }

  CreateEventCategory(events: any) {
    return this.http.post<CreateEventCategory>(
      `${this.apiurl}/EventCategories`,
      events
    );
  }
  updateEventCategories(id: number, eventCategories: any) {
    return this.http.put(
      `${this.apiurl}/EventCategories/${id}`,
      eventCategories
    );
  }
}
