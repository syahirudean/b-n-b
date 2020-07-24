import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { BoardService } from '../board.service';
import { Note } from '../note/note.model';

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
  formatDate = this.pipe.transform(this.date, 'medium');

  constructor(private fb: FormBuilder, private boardService: BoardService) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      id: '',
      date: '',
      subject: '',
      body: this.fb.array([this.initList()]),
    });
  }

  get bodyForms() {
    return this.noteForm.get('body') as FormArray;
  }

  initList() {
    return this.fb.group({
      list: [],
    });
  }

  emptyList() {
    return this.fb.group({
      list: [],
    });
  }

  addList() {
    this.bodyForms.push(this.emptyList());
  }

  deleteList(i) {
    this.bodyForms.removeAt(i);
  }

  onSubmit() {
    if (this.noteForm.value.subject !== '') {
      this.noteForm.value.date = this.formatDate;
      this.noteForm.value.id = Date.now();
      console.log(this.noteForm.value);
      this.boardService.add(this.noteForm.value);
      this.noteForm.reset();
      console.log(this.noteForm.value);
      this.bodyForms.clear();
      this.bodyForms.push(this.emptyList());
    }
  }
}
