import { Component, inject } from '@angular/core';
import { ActivityScheduleComponent } from '../../molecules/activity-schedule/activity-schedule.component';
import { ActivityCalendarComponent } from '../../molecules/activity-calendar/activity-calendar.component';
import { Store } from '@ngrx/store';
import { selectSelectedDate } from '../../../../store/selected-date/selected-date.selectors';
import { changeSelectedDate } from '../../../../store/selected-date/selected-date.actions';

@Component({
  imports: [ActivityScheduleComponent, ActivityCalendarComponent],
  standalone: true,
  selector: 'app-activity-scheduler',
  templateUrl: './activity-scheduler.component.html',
  styleUrl: './activity-scheduler.component.scss',
})
export class ActivitySchedulerComponent {
  private readonly _store: Store = inject(Store);
  public selectedDate = this._store.selectSignal(selectSelectedDate);

  protected onDateChanged(date: Date) {
    this._store.dispatch(changeSelectedDate({ newDate: date }));
  }
}
