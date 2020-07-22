import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BoardComponent, NoteComponent, AddNoteComponent],
  imports: [CommonModule, AuthModule, FormsModule, ReactiveFormsModule],
  exports: [BoardComponent, NoteComponent, AddNoteComponent],
})
export class BoardModule {}
