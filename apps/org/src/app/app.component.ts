import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivitySchedulerComponent } from './scheduler/components/organisms/activity-scheduler/activity-scheduler.component';

@Component({
  imports: [RouterModule, ActivitySchedulerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
