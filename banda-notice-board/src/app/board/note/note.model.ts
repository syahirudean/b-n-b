import { List } from './list.model';

export class Note {
  constructor(public id: string, public date: number, public subject: string, public body: List[]) {
    this.id = id;
    this.date = date;
    this.subject = subject;
    this.body = body;
  }
}
