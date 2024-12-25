import { Component } from '@angular/core';
import { SchedulerModule } from 'smart-webcomponents-angular/scheduler';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';

@Component({
  imports: [SchedulerModule, CalendarModule],
  standalone: true,
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {}
