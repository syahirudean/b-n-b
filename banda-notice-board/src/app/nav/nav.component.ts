import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board/board.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  join = 1;
  signin = [];

  constructor(public auth: AuthService, public boardService: BoardService) {}

  ngOnInit(): void {}

  onJoin() {
    this.boardService.sendJoin(this.join);
    this.signin.push(1);
  }

  logout() {
   // this.auth.logout();
  }
}
