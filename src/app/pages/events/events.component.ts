import { Component } from '@angular/core';
import { Event } from '../../Interfaces/Event';
import { TableComponent } from '../../components/Table/table.component';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';
import { EventService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  imports: [TableComponent],
})
export class EventsComponent {
  eventsItems: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getItems().subscribe((item) => {
      this.eventsItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Name',
      key: 'name',
    },
    {
      label: 'Description',
      key: 'description',
    },
    {
      label: 'Date',
      key: 'date',
    },
    {
      label: 'Location',
      key: 'location',
    },
  ];
}
