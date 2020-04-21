import axios, { AxiosResponse } from "axios";
import { BOOKS_URL } from "../constants";
import { Book } from "../models";
import * as TYPES from "./types";
const { ActionTypes } = TYPES;

const getBooks = async (dispatch: React.Dispatch<TYPES.Action>) => {
  dispatch({
    type: ActionTypes.FetchBooksRequest,
  });

  try {
    await axios.get<Book[]>(BOOKS_URL).then((response: AxiosResponse<any>) => {
      const data = response.data.hits;
      const books: Book[] = data.map((item: any) => {
        return new Book(item);
      });
      dispatch({
        type: ActionTypes.FetchBooksSuccess,
        payload: books,
      });
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FetchBooksFailed,
      payload: {
        error: "Error",
      },
    });
  }
};

export const booksActions = {
  getBooks,
};
