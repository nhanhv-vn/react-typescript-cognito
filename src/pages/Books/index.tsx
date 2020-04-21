import React, { useContext, useEffect, FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Book } from "./../../models";
import { booksActions } from "./../../actions";
import { BooksContext } from "./../../contexts";

export const Books: FC = () => {
  const context = useContext(BooksContext);
  const { state, dispatch } = context;
  useEffect(() => {
    booksActions.getBooks(dispatch);
  }, [dispatch]);

  if (state.loading) {
    return <h2>Loading...</h2>;
  }

  if (state.error) {
    return <h2>{state.error}</h2>;
  }

  return (
    <Grid>
      {state.books.map((book: Book) => {
        return (
          <Typography variant="subtitle1" key={book.objectID}>
            <a href={book.url} target="_blank">
              {book.title}
            </a>
          </Typography>
        );
      })}
    </Grid>
  );
};
