import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../models/note.model";
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'filterFirstName'
})
export class FilterFirstNamePipe implements PipeTransform {

  transform(notes: Note[], search: string) {
    if (!isNullOrUndefined(notes) && search.trim() !== "") {
      let filter_persons = notes.filter(
        note => note.datecreate.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return  filter_persons;
    }
    return notes;
  }

}
