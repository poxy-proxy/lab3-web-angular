import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Book} from "../../shared/book";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() book: Book;
  @Output() details = new EventEmitter();
  @Output() delete = new EventEmitter();

  onDetails() {
      this.details.emit(this.book);
  }

  onDelete() {
      this.delete.emit(this.book);
  }
}
