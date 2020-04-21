import React, { useReducer, FC } from "react";
import Amplify from "aws-amplify";

import { Routes } from "./routes";
import { AuthContext, BooksContext } from "./contexts";
import aws_exports from "./aws-exports";
import {
  AuthReducer,
  authInitState,
  BooksReducer,
  booksInitState,
} from "./reducers";
import "./App.css";

Amplify.configure(aws_exports);

const App: FC = () => {
  const [authState, authDispatch] = useReducer(AuthReducer, authInitState);
  const [booksState, booksDispatch] = useReducer(BooksReducer, booksInitState);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          state: authState,
          dispatch: authDispatch,
        }}
      >
        <BooksContext.Provider
          value={{
            state: booksState,
            dispatch: booksDispatch,
          }}
        >
          <Routes />
        </BooksContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
