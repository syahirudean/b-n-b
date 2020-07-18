import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}
  private notes: Note[] = [new Note('First Task', 'This is the first task')];

  getNote() {
    return this.notes;
  }
}
