import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() textContent;
  
  constructor() { }

  ngOnInit() {
  }

}
