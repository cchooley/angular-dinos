import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Job } from '../models/job';
import { Display } from '../models/display';

@Injectable()
export class HttpService {

  url = 'assets/listing.json'

  constructor(private _http: HttpClient) { }

  getJobs(): Observable<Array<Job>> {
    return this._http.get<Array<Job>>(this.url)
  }
  getDisplay(): Observable<Display> {
    return this._http.get<Display>(this.url)
  }
}
