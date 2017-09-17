export class Human {
    public id: number;
    public name: string;
    public last_name: string;
    public email: string;
    public pswrd: string;

    constructor (id: number, name: string, last_name: string, email: string, pswrd: string) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.pswrd = pswrd;
      }
}
