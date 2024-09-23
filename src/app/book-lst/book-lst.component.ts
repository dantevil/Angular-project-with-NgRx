import { Component } from '@angular/core';
import { Book } from '../models/book';
import {Store, select} from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { addBook,removeBook} from '../books/book.actions';
import { AppState } from '../app.state';
@Component({
  selector: 'app-book-lst',
  templateUrl: './book-lst.component.html',
  styleUrls: ['./book-lst.component.css']
})
export class BookLstComponent {
books$:Observable<Book[]> ;
  constructor(private store: Store<AppState>){
    this.books$ = store.pipe(select('book'));
  }

  AddBook(id:string,title:string,author:string){
    this.store.dispatch(addBook({id,title,author}))
  }

  RemoveBook(bookId:string){
    this.store.dispatch(removeBook({bookId}))
  }
}
