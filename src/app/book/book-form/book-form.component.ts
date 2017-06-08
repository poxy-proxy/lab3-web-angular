import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from "../../shared/book";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
    title: string = '';
    author: string = '';
    numberPage: number = 0;
    circulations: number = 0;
    dateWriting:string = '';
    book: Book;
    @Output() create: EventEmitter<any> = new EventEmitter();

    onSubmit() {
        let newbook = {
            titleb: this.title,
            authorb: this.author,
            numberPage: this.numberPage,
            circul: this.circulations,
            dateWrit: this.dateWriting
        };
        console.log(newbook);
        this.create.emit(newbook);
    }
}
