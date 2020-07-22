export class Note {
  constructor(public id: string, public date: number, public subject: string, public body: string) {
    this.id = id;
    this.date = date;
    this.subject = subject;
    this.body = body;
  }
}
