import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {BookService} from "../shared/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: Book[];
  book: Book;

  constructor(private bookService: BookService) {
      this.books = [];
      console.log(this.books);
  }

  ngOnInit() {
      this.bookService.getBooks().subscribe(res => this.books = res);
  }

  create(book) {
      this.bookService.createBook(book).subscribe(res => this.books = res);
  }

  update(book: Book) {
      this.bookService.updateBook(book).subscribe(res => this.books = res);
  }

  delete(book: Book) {
      this.bookService.deleteBook(book.idBook).subscribe(res => this.books = res);
  }

  details(book: Book) {
      this.bookService.getOneBook(book.idBook).subscribe(res => this.book = res);
  }
}
