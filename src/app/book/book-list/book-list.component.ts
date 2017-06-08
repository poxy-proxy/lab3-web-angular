import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../shared/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent{
  @Input() books: Book[];
  @Output() details: EventEmitter<Book> = new EventEmitter();
  @Output() delete: EventEmitter<Book> = new EventEmitter();

  onDetails(book: Book) {
      this.details.emit(book);
  }

  onDelete(book: Book) {
      this.delete.emit(book);
  }
}
