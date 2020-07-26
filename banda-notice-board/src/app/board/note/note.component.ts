import { Component, OnInit, Input } from '@angular/core';

import { Note } from './note.model';
import { BoardService } from '../board.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() notes: Note;
  editState = false;
  edit: Note;

  constructor(public board: BoardService, public auth: AuthService) {}

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
