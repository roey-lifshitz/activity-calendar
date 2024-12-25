import {
  Component,
  effect,
  input,
  InputSignal,
  ViewChild,
} from '@angular/core';
import {
  SchedulerComponent,
  SchedulerModule,
} from 'smart-webcomponents-angular/scheduler';
import { CalendarModule } from 'smart-webcomponents-angular/calendar';

@Component({
  imports: [SchedulerModule, CalendarModule],
  standalone: true,
  selector: 'app-activity-schedule',
  templateUrl: './activity-schedule.component.html',
  styleUrl: './activity-schedule.component.scss',
})
export class ActivityScheduleComponent {
  public $currentDate: InputSignal<Date> = input.required({
    alias: 'currentDate',
  });

  @ViewChild('scheduler', { static: false }) scheduler!: SchedulerComponent;
  constructor() {
    effect(() => {
      console.log(this.$currentDate());
    });
  }
}
