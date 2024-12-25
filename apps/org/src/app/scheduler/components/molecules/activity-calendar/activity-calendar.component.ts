import {
  Component,
  computed,
  effect,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  ViewChild,
} from '@angular/core';
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
  public changedDate: OutputEmitterRef<Date> = output();

  protected $selectedDates = computed(() => {
    const date = this.$currentDate();
    return [
      new Date(date.getFullYear(), date.getMonth(), 1),
      new Date(date.getFullYear(), date.getMonth() + 1, 0),
    ];
  });

  @ViewChild('calendar', { static: false }) calendar!: CalendarComponent;

  protected onDateChanged(event: CustomEvent) {
    const { value } = event.detail;
    if (value.length === 1) {
      this.changedDate.emit(value[0]);
    }
  }
}
