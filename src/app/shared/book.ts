export class Book {
  idBook: number;
  constructor(public title: string,
              public author: string,
              public numberPages: number,
              public circulations: number,
              public dateWriting: string) {}
}
