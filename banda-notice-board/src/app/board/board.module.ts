import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [BoardComponent, NoteComponent, AddNoteComponent],
  imports: [CommonModule, AuthModule],
  exports: [BoardComponent, NoteComponent, AddNoteComponent],
})
export class BoardModule {}
