import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  submitted = false;
  condition = false;


  model: Job = {
    id: 0,
    title: '',
    description: '',
    pay: '',
    interested: [],
  }

  submitData(): void {
    event.preventDefault();
    this.model = {
      id: 0,
      title: '',
      description: '',
      pay: '',
      interested: []
    }
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}

