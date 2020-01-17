import { Component, OnInit } from '@angular/core';
import {PersonsService} from "../shared/services/persons.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  content_filter: boolean;
  search_content = "";
  search_lastname = "";
  lastname_filter: boolean;
  search_firstname = "";
  firstname_filter: boolean;
  constructor(private personsService: PersonsService) { }

  ngOnInit() {
  }

}
