import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pupil } from '../class/pupil';

@Component({
  selector: 'app-pupil-edit',
  templateUrl: './pupil-edit.component.html',
  styleUrls: ['./pupil-edit.component.css']
})
export class PupilEditComponent implements OnInit {

  @Input() pupil: Pupil;

  @Output() pupilChange = new EventEmitter<Pupil>();

  constructor() {}

  ngOnInit(): void {
    this.pupil = new Pupil();
  }

  OnPupilChanged() {
    this.pupilChange.emit(this.pupil);    
  }
}
