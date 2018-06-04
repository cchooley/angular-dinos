import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Display } from '../../models/display';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  display: Display

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._httpService.getDisplay().subscribe(data => {
      this.display = data;
    })

  }

}
