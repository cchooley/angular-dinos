import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Dino } from '../../models/dino';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})

export class ProfilesComponent implements OnInit {
  dinos: Array<Dino> = [];

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._httpService.getDinos().subscribe(dinos => {
      this.dinos = dinos;
    })
  }

}

