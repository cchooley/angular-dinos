import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Job } from '../models/job';



@Injectable()
export class JobFormService {

  jobForm: Subject<Job>;

  constructor() {
    this.jobForm = new Subject();
  }

  addJob(jobData) {
    this.jobForm.next(jobData);
  }
}
