import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from "../shared/models/note.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonsService} from "../shared/services/persons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  id: number;
  addForm: FormGroup;
  disabled_form = false;
  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private personsServise: PersonsService) {
    this.activatedRouter.params.subscribe(param => {
       this.id = param.id;
    });
  }

  // public mask = ['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];

  ngOnInit() {
    let editNote = this.personsServise.get_note_by_id(this.id);
    if (isNullOrUndefined(editNote)) editNote = {content: "", datecreate: "", datecomplete: ""};
    this.addForm = new FormGroup( {
      content: new FormControl({value: editNote.content, disabled: this.disabled_form}, [Validators.required]),
      datecreate: new FormControl({value: editNote.datecreate, disabled: this.disabled_form}, [Validators.required]),
      datecomplete: new FormControl({value: editNote.datecomplete, disabled: this.disabled_form}, [Validators.required])
    })
  }

  onSave() {
    if (this.id) {
      let note = new Note (this.addForm.value.content, this.addForm.value.datecreate, this.addForm.value.datecomplete, this.id);
      this.personsServise.onEditPerson(note);
    }
    else {
      let note = new Note (this.addForm.value.content, this.addForm.value.datecreate, this.addForm.value.datecomplete);
      this.personsServise.onAddPerson(note);
    }
    this.router.navigate([`/note`]); 

  }
}
