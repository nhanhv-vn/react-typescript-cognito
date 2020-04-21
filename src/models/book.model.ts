export class Book {
  title: string;
  url: string;
  objectID: string;
  constructor(book: Book) {
    this.title = book.title;
    this.url = book.url;
    this.objectID = book.objectID;
  }
}
