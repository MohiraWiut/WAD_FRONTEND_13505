import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../Interfaces/Event';
import { EventService } from '../../services/events.service';

@Component({
  selector: 'app-events-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './events-detail-view.component.html',
  styleUrl: './events-detail-view.component.scss',
})
export class EventsDetailViewComponent {
  EventService = inject(EventService);
  eventsDetail: Event = {
    id: 0,
    name: '',
    description: '',
    date: '',
    location: '',
    eventId: 0,
    eventCategory: {
      id: 0,
      name: '',
      description: '',
    },
  };

  route = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.route.snapshot.params['id']; // Get the ID from the route params

    this.EventService.getEvents(id).subscribe((item: Event) => {
      this.eventsDetail = item;
    });
  }
}
