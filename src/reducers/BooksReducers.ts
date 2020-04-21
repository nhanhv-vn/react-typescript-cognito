import { Book } from "./../models";
import { Action, ActionTypes } from "./../actions";

export interface BooksState {
  loading: boolean;
  error: string;
  books: Book[];
}

export const booksInitState: BooksState = {
  loading: false,
  error: "",
  books: [],
};

export const BooksReducer = (
  state: BooksState = booksInitState,
  action: Action
): BooksState => {
  switch (action.type) {
    case ActionTypes.FetchBooksRequest:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FetchBooksSuccess:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case ActionTypes.FetchBooksFailed:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
