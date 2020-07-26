import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { BoardService } from '../board.service';
import { Note } from '../note/note.model';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  @Input() notes: Note;
  user: User;
  noteForm: FormGroup;
  date: number = Date.now();
  pipe = new DatePipe('en-SG');
  formatDate = this.pipe.transform(this.date, 'medium');

  constructor(private fb: FormBuilder, private boardService: BoardService, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUser().subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
    this.noteForm = this.fb.group({
      id: '',
      avatar: '',
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
      this.noteForm.value.id = this.user.uid;
      this.noteForm.value.avatar = this.user.icon;
      this.boardService.add(this.noteForm.value);
      this.noteForm.reset();
      this.bodyForms.clear();
      this.bodyForms.push(this.emptyList());
    }
  }
}
