import { Injectable } from '@angular/core';

import { Note } from './note.model';
import { Subject, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private board: AngularFirestoreCollection<Note>;
  notes$: Observable<Note[]>;
  noteDoc: AngularFirestoreDocument<Note>;
  subject = new Subject<number>();

  constructor(public afs: AngularFirestore) {
    this.board = this.afs.collection<Note>('notes', (ref) => {
      return ref.orderBy('date');
    });
    this.notes$ = this.board.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Note;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }
  // private notes: Note[] = [new Note('First Task', 'This is the first task')];

  getNotes() {
    return this.notes$;
  }

  addNote(note: Note) {
    this.board.add(note);
  }

  deleteNote(note: Note) {
    this.noteDoc = this.afs.doc(`notes/${note.id}`);
    this.noteDoc.delete();
  }

  update(note: Note) {
    this.noteDoc = this.afs.doc(`notes/${note.id}`);
    this.noteDoc.update(note);
  }

  sendJoin(value: number) {
    this.subject.next(value);
  }

  getJoin() {
    return this.subject.asObservable();
  }
}
