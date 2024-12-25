import { Component, signal } from '@angular/core';
import { ActivityScheduleComponent } from '../../molecules/activity-schedule/activity-schedule.component';
import { ActivityCalendarComponent } from '../../molecules/activity-calendar/activity-calendar.component';

@Component({
  imports: [ActivityScheduleComponent, ActivityCalendarComponent],
  standalone: true,
  selector: 'app-activity-scheduler',
  templateUrl: './activity-scheduler.component.html',
  styleUrl: './activity-scheduler.component.scss',
})
export class ActivitySchedulerComponent {
  public selectedDate = signal(new Date());
}
