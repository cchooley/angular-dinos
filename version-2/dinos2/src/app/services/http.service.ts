import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dino } from '../models/dino';

@Injectable()
export class HttpService {

  url = 'assets/dinosaurs.json'

  constructor(private _http: HttpClient) { }

  getDinos(): Observable<Array<Dino>> {
    return this._http.get<Array<Dino>>(this.url)
  }


}