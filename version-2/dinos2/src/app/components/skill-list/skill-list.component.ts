import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Dino } from '../../models/dino';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
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
