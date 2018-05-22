import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { Job } from '../../models/job';
import { JobFormService } from '../../services/job-form.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Array<Job> = [];

  constructor(
    private _httpService: HttpServiceService,
    private _job: JobFormService
  ) { }

  ngOnInit(): void {
    this._httpService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });

    this._job.jobForm.subscribe(newJob => {
      this.jobs.unshift(newJob);
    });
  }

}
