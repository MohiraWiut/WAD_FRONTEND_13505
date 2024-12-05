import { Component } from '@angular/core';
import { EventCategoriesService } from '../../services/eventCategories.service';
import { EventCategory } from '../../Interfaces/EventCategory';
import { TableColumnTypes } from '../../Interfaces/TableColumnTypes';
import { TableComponent } from '../../components/Table/table.component';

@Component({
  selector: 'app-eventCategories',
  standalone: true,
  templateUrl: './eventCategories.component.html',
  styleUrl: './eventCategories.component.scss',
  imports: [TableComponent],
})
export class EventCategoriesComponent {
  eventItems: EventCategory[] = [];

  constructor(private eventCategoriesService: EventCategoriesService) {}

  ngOnInit(): void {
    this.eventCategoriesService.getItems().subscribe((item) => {
      this.eventItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Category Name',
      key: 'name',
    },
    {
      label: 'Description',
      key: 'description',
    },
  ];
}
