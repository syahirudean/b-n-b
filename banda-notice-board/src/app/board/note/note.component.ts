import { Component, OnInit, Input } from '@angular/core';

import { Note } from './note.model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() notes: Note;
  editState = false;
  edit: Note;

  constructor(public board: BoardService) {}

  ngOnInit(): void {}

  deleteNote(event, note: Note): void {
    this.close();
    this.board.delete(note);
  }

  editNote(event, note: Note): void {
    this.editState = true;
    this.edit = note;
  }
  updateNote(note: Note): void {
    this.board.update(note);
    this.close();
  }

  close(): void {
    this.editState = false;
    this.edit = null;
  }
}
