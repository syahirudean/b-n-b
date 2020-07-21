import { Injectable } from '@angular/core';

import { Note } from './note.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  subject = new Subject<number>();

  constructor() {}
  private notes: Note[] = [new Note('First Task', 'This is the first task')];

  getNote() {
    return this.notes;
  }

  sendJoin(value: number) {
    this.subject.next(value);
  }

  getJoin() {
    return this.subject.asObservable();
  }
}
