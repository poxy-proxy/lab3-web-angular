import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from "../../shared/book";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
    @Input() book: Book;
    @Output() update = new EventEmitter();

    onUpdate() {
        let newbook = {
            idBook: this.book.idBook,
            titleb: this.book.title,
            authorb: this.book.author,
            numberPage: this.book.numberPages,
            circul: this.book.circulations,
            dateWrit: this.book.dateWriting
        };
        console.log(newbook);
        this.update.emit(newbook);
    }
}
