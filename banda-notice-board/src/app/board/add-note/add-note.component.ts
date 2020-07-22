import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { BoardService } from '../board.service';
import { Note } from '../note.model';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  @Input() notes: Note;
  noteForm: FormGroup;
  date: number = Date.now();
  pipe = new DatePipe('en-SG');
  formatDate = this.pipe.transform(this.date, 'short');

  constructor(private fb: FormBuilder, private boardService: BoardService) {}

  ngOnInit(): void {
    console.log(this.notes);
    this.noteForm = this.fb.group({
      date: this.formatDate,
      subject: '',
      body: '',
    });
  }

  onSubmit() {
    console.log(this.noteForm.value);
    if (this.noteForm.value.subject !== '') {
      this.boardService.addNote(this.noteForm.value);
      this.noteForm.reset(this.noteForm);
    }
  }
}
