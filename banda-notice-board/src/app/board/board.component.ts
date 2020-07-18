import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';
import { Note } from './note.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  notes: Note[];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.notes = this.boardService.getNote();
    console.log(this.notes);
  }
}
