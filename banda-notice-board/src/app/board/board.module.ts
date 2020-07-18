import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
  declarations: [BoardComponent, NoteComponent, AddNoteComponent],
  imports: [CommonModule],
  exports: [BoardComponent, NoteComponent, AddNoteComponent],
})
export class BoardModule {}
