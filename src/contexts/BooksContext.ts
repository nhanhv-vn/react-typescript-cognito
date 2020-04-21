import { createContext } from "react";
import { Action } from "../actions";
import { booksInitState } from "../reducers";

export const BooksContext = createContext({
  state: booksInitState,
  dispatch: (action: Action) => {},
});
