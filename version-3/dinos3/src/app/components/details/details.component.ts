import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  jobs: Array<Job> = [];

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._httpService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    })

  }

}
