import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {PersonsApiService} from "./persons-api.service";
import {Note} from "../models/note.model";
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class PersonsService implements OnInit{
  notes: any;

  constructor(private personsApiService: PersonsApiService) { 
    this.get_notes();
  }

  ngOnInit() {

  }

  async get_notes () {
    try {
      let gnotes = this.personsApiService.getNotes();
      this.notes = (isNullOrUndefined(await gnotes)) ? [] : await gnotes;
    } catch (err) {
      console.log(err);
    }
  }
  
  get_note_by_id (id: number) {
    return this.notes.find(note => note.id === id);
  }

  async onAddPerson (note: Note) {
    note.id = (this.notes.length)
      ? this.notes[this.notes.length - 1].id + 1
      : 1;
    this.notes.push(note);
    try {
      await this.personsApiService.postNotes({
        content: note.content, datecreate: note.datecreate, datecomplete: note.datecomplete});
    }
    catch (e) {
      console.error(e);
    }
  }

  async onEditPerson (ed_note: Note) {
    this.notes.splice (
      this.notes.findIndex(note => {note.id === ed_note.id}),
      1, ed_note);
    try {
      await this.personsApiService.putNotes(ed_note.id, {
        content: ed_note.content, datecreate: ed_note.datecreate, datecomplete: ed_note.datecomplete});
    }
    catch (e) {
      console.error(e);
    }
  }
  async onDeletePerson (del_note_id: number) {
    this.notes.splice(this.notes.indexOf(this.notes.find((element, index, array) => {
      return (element.id === del_note_id)
    })), 1); 
    try {
      await this.personsApiService.deleteNotes(del_note_id);
    }
    catch (e) {
      console.error(e);
    }
  }
}
