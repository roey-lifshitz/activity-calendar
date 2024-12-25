import { Component, input, InputSignal, ViewChild } from '@angular/core';
import {
  CalendarComponent,
  CalendarModule,
} from 'smart-webcomponents-angular/calendar';

@Component({
  imports: [CalendarModule],
  standalone: true,
  selector: 'app-activity-calendar',
  templateUrl: './activity-calendar.component.html',
  styleUrl: './activity-calendar.component.scss',
})
export class ActivityCalendarComponent {
  public $currentDate: InputSignal<Date> = input.required({
    alias: 'currentDate',
  });

  @ViewChild('calendar', { static: false }) scheduler!: CalendarComponent;
}
