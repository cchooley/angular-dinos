import { Component, ViewChild } from '@angular/core';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobFormComponent } from './components/job-form/job-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(JobListComponent) jobListComponent;
}
