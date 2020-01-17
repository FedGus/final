import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../models/note.model";
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'filterContent'
})
export class ContentFilterPipe implements PipeTransform {

  transform(notes: Note[], search: string) {
    if (!isNullOrUndefined(notes) && search.trim() !== "") {
      let filter_content = notes.filter(
        note => note.content.toLowerCase().indexOf(search.toLowerCase()) === 0
      );
      return filter_content;
    }
    return notes;
  }

}
