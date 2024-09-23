import { Book } from "../models/book"
import {createReducer,on} from"@ngrx/store"
import { addBook, addBookFailure, addBookSuccess, removeBook} from "./book.actions";

export const initialState : Book[] = [];
export const BookReducer = createReducer(
    initialState,
    on(addBook,(state)=> {return state}),
    on(addBookSuccess,(state,{id,title,author})=> [...state,{id,title,author}]),
    on(addBookFailure,(state,{errors})=> {
        console.log(errors);
        return state;
    }),
    on(removeBook,(state,{bookId})=>state.filter(book => book.id !== bookId))
)