import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookItemComponent } from './book/book-item/book-item.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import {BookService} from "./shared/book.service";
import { BookDetailsComponent } from './book/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    BookItemComponent,
    BookFormComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
