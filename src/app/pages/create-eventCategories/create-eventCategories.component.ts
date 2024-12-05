import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventCategoriesService } from '../../services/eventCategories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCategory } from '../../Interfaces/EventCategory';

@Component({
  selector: 'app-create-eventCategories',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-eventCategories.component.html',
  styleUrl: './create-eventCategories.component.scss',
})
export class CreateEventCategoryComponent {
  @Input()
  eventsDetail!: EventCategory;

  eventId: number = 0;

  router = inject(Router);
  EventCategoriesService = inject(EventCategoriesService);
  route = inject(ActivatedRoute);

  eventsForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('event-categoriesId')) {
        const id: number = Number(params.get('event-categoriesId'));
        this.eventId = id;
        this.EventCategoriesService.getEventCategories(id).subscribe(
          (item: any) => {
            this.eventsForm = new FormGroup({
              name: new FormControl(item.name),
              description: new FormControl(item.description),
            });
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.eventId) {
      this.EventCategoriesService.updateEventCategories(this.eventId, {
        id: this.eventId,
        ...this.eventsForm.value,
      }).subscribe((_) => {
        this.router.navigateByUrl('event-categories');
      });
    } else {
      this.EventCategoriesService.CreateEventCategory(
        this.eventsForm.value
      ).subscribe((_) => {
        this.router.navigateByUrl('event-categories');
      });
    }
  }
}
