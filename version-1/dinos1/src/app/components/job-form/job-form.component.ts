import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/job';
import { JobFormService } from '../../services/job-form.service';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  @Input() numberOfJobs: number;

  model: Job = {
    id: 0,
    title: '',
    description: '',
    pay: '',
    interested: []
  };

  constructor(private _jobFormService: JobFormService) { }

  ngOnInit() {}


  onClick(): void {
    event.preventDefault();
    this.model.id = this.numberOfJobs + 1;
    this._jobFormService.addJob(this.model);
    this.model = {
      id: 0,
      title: '',
      description: '',
      pay: '',
      interested: []
    }
  }
}

