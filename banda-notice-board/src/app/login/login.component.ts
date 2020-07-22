import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { BoardService } from '../board/board.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  join = [];

  constructor(public auth: AuthService, private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.getJoin().subscribe((value) => {
      this.join.push(value);
    });
  }

  signup() {
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.auth.login(this.email, this.password);
    this.email = this.password = '';
  }
}
