import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './scheduler/components/organisms/schedule/schedule.component';

@Component({
  imports: [RouterModule, ScheduleComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
