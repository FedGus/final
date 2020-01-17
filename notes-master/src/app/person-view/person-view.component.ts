import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../shared/models/note.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input() inNote: Note; 
  @Output() delNote = new EventEmitter<number>(); 

  today: number = Date.now();
  formatdate: string;
  constructor() { }

  ngOnInit() {
    let pipe = new DatePipe('en-US');
    this.formatdate = pipe.transform(this.today, "yyyy-MM-dd");
    console.log(this.formatdate);
  }

  onDeleteNote () {
    this.delNote.emit(this.inNote.id);
  }

}
