import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateEvent, Event } from '../Interfaces/Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiurl = 'https://localhost:7163/api';
  constructor(private http: HttpClient) {}
  getItems(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiurl + '/Events');
  }

  getEvents(id: number) {
    return this.http.get<Event>(`${this.apiurl}/Events/${id}`);
  }

  deleteEvents(id: number) {
    return this.http.delete(`${this.apiurl}/Events/${id}`);
  }

  CreateEvent(events: any) {
    return this.http.post<CreateEvent>(`${this.apiurl}/Events`, events);
  }
  updateEvents(id: number, eventCategories: any) {
    return this.http.put(`${this.apiurl}/Events/${id}`, eventCategories);
  }
}
