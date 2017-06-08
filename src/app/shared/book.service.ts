import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Book} from "./book";

@Injectable()
export class BookService {
  private apiUrl = 'https://lab2mongodb-vlsu.herokuapp.com/api/v1/book';
  constructor(private http:Http) { }

  getBooks(): Observable<Book[]> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers });

      return this.http.get(this.apiUrl, options)
        .map(res => res.json() as Book[])
        .catch(this.handleError);
  }

  getOneBook(idBook: number): Observable<Book> {
      let url = `${this.apiUrl}/${idBook}`;
      return this.http.get(url)
        .map(res => res.json() as Book)
        .catch(this.handleError);
  }

  createBook(book) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers });
      console.log(book);
      return this.http.post(this.apiUrl, book, options)
          .map(res => res.json() as Book[])
          .catch(this.handleError);
  }

  updateBook(book: Book) {
      console.log(book);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers });
      let url = `${this.apiUrl}/${book.idBook}`;
      return this.http.put(url, book, options)
        .catch(this.handleError)
  }

  deleteBook(idBook: number) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers });
      let url = `${this.apiUrl}/${idBook}`;
      return this.http.delete(url, options)
          .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Произошла ошибка ', error);
    return Observable.throw(error.message || error);
  }

}
