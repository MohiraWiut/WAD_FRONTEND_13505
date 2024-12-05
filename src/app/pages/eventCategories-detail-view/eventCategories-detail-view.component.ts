import { Component, inject } from '@angular/core';
import { EventCategoriesService } from '../../services/eventCategories.service';
import { EventCategory } from '../../Interfaces/EventCategory';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventCategories-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './eventCategories-detail-view.component.html',
  styleUrl: './eventCategories-detail-view.component.scss',
})
export class EventCategoriesDetailViewComponent {
  EventCategories = inject(EventCategoriesService);
  eventCategoriesDetail: EventCategory = {
    id: 0,
    name: '',
    description: '',
  };
  route = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.route.snapshot.params['id']; // Get the ID from the route params

    this.EventCategories.getEventCategories(id).subscribe(
      (item: EventCategory) => {
        this.eventCategoriesDetail = item;
      }
    );
  }
}
