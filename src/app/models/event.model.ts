export class Evento {
    public id: number;
    public name: string;
    public author: string;
    public date_begin: Date;
    public date_end: Date;
    public description: string;

    constructor (id: number, name: string, author: string,
                date_begin: Date, date_end: Date, description: string) {

      this.id = id;
      this.name = name;
      this.author = author;
      this.date_begin = date_begin;
      this.date_end = date_end;
      this.description = description;
    }
  }
