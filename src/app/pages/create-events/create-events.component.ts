import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventCategoriesService } from '../../services/eventCategories.service';
import { EventCategory } from '../../Interfaces/EventCategory';
import { EventService } from '../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../Interfaces/Event';

@Component({
  selector: 'app-create-events',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-events.component.html',
  styleUrl: './create-events.component.scss',
})
export class CreateEventComponent {
  router = inject(Router);
  EventCategories = inject(EventCategoriesService);
  route = inject(ActivatedRoute);
  eventService = inject(EventService);
  events: Event[] = [];
  eventCategories: EventCategory[] = [];
  eventsId: number = 0;

  eventsForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
    eventCategoryId: new FormControl(''),
  });

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('eventsId')) {
        const id: number = Number(params.get('eventsId'));
        this.eventsId = id;
        this.eventService.getEvents(id).subscribe((item: any) => {
          this.eventsForm = new FormGroup({
            name: new FormControl(item.name),
            description: new FormControl(item.description),
            date: new FormControl(item.date.slice(0, 10)),
            location: new FormControl(item.location),
            eventCategoryId: new FormControl(item.eventCategoryId),
          });
        });
      }
      this.EventCategories.getItems().subscribe((result) => {
        this.eventCategories = result;
      });
    });
  }

  onSubmit() {
    if (this.eventsId) {
      this.eventService
        .updateEvents(this.eventsId, {
          id: this.eventsId,
          ...this.eventsForm.value,
        })
        .subscribe((_) => {
          this.router.navigateByUrl('events');
        });
    } else {
      this.eventService.CreateEvent(this.eventsForm.value).subscribe((_) => {
        this.router.navigateByUrl('events');
      });
    }
  }
}
