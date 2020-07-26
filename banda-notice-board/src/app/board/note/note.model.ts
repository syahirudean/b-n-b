import { List } from './list.model';

export class Note {
  constructor(
    public id: string,
    public avatar: string,
    public date: number,
    public subject: string,
    public body: List[]
  ) {
    this.id = id;
    this.avatar = avatar;
    this.date = date;
    this.subject = subject;
    this.body = body;
  }
}
