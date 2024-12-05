import { Routes } from '@angular/router';
import { EventCategoriesComponent } from './pages/eventCategories/eventCategories.component';
import { CreateEventCategoryComponent } from './pages/create-eventCategories/create-eventCategories.component';
import { EventCategoriesDetailViewComponent } from './pages/eventCategories-detail-view/eventCategories-detail-view.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateEventComponent } from './pages/create-events/create-events.component';
import { EventsDetailViewComponent } from './pages/events-detail-view/events-detail-view.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/event-categories',
    pathMatch: 'full',
  },
  {
    path: 'event-categories',
    component: EventCategoriesComponent,
  },
  {
    path: 'create-event-categories',
    component: CreateEventCategoryComponent,
  },
  {
    path: 'event-categories/:id',
    component: EventCategoriesDetailViewComponent,
  },

  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'create-events',
    component: CreateEventComponent,
  },
  {
    path: 'events/:id',
    component: EventsDetailViewComponent,
  },
];
