import { Component, Input, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';
import { Event } from '../../Interfaces/Event';
import { EventCategory } from '../../Interfaces/EventCategory';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EventCategoriesService } from '../../services/eventCategories.service';
import { EventService } from '../../services/events.service';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [MatTableModule],
})
export class TableComponent {
  router = inject(Router);
  location = inject(Location);
  eventCategories = inject(EventCategoriesService);
  eventService = inject(EventService);

  @Input()
  dataWarehouse: (Event | EventCategory)[] = [];

  @Input()
  displayedColumns: TableColumnTypes[] = [];

  displayedColumnsStr: string[] = [];

  ngOnChanges() {
    this.displayedColumnsStr = this.displayedColumns.map((item) => item.key);
    this.displayedColumnsStr.unshift('No');
    this.displayedColumnsStr.push('Actions');
  }

  EditClicked(id: number) {
    const route = this.location.path().slice(1);
    this.router.navigateByUrl(`create-${route}?${route}Id=${id}`);
  }

  DetailsClicked(id: number) {
    this.router.navigateByUrl(this.location.path() + '/' + id);
  }

  DeleteClicked(id: number) {
    if (this.location.path() === '/event-categories') {
      this.eventCategories.deleteEventCategories(id).subscribe((_) => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id);
      });
    }

    if (this.location.path() === '/events') {
      this.eventService.deleteEvents(id).subscribe((_) => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id);
      });
    }
  }
}
