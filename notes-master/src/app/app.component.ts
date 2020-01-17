import {Component, OnDestroy, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {PersonsApiService} from "./shared/services/persons-api.service";
import {Note} from "./shared/models/note.model";
import {PersonsService} from "./shared/services/persons.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Krasnova0';
  notes: any;
  
  constructor(private personsService: PersonsService) { 
  }

  async ngOnInit() { 
    this.notes = this.personsService.notes;

  }

  ngOnDestroy(): void {
  }

}
