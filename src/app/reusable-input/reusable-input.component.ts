import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reusable-input',
  templateUrl: './reusable-input.component.html',
  styleUrls: ['./reusable-input.component.css']
})
export class ReusableInputComponent implements OnInit {

  @Input() firstName: string;

  @Output() firstNameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  OnFirstNameChanged() {
    this.firstNameChange.emit(this.firstName);
  }

}
